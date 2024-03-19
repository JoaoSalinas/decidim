# frozen_string_literal: true

module Decidim
  # A command with all the business logic when a user creates a report.
  class CreateReport < Decidim::Command
    # Public: Initializes the command.
    #
    # form         - A form object with the params.
    # reportable   - The resource being reported
    # current_user - The current user.
    def initialize(form, reportable, current_user)
      @form = form
      @reportable = reportable
      @current_user = current_user
      @tool = Decidim::ModerationTools.new(reportable, current_user)
    end

    delegate :moderation, :participatory_space, :update_reported_content!, :update_report_count!, to: :tool
    # Executes the command. Broadcasts these events:
    #
    # - :ok when everything is valid, together with the report.
    # - :invalid if the form was not valid and we could not proceed.
    #
    # Returns nothing.
    def call
      return broadcast(:invalid) if form.invalid?

      transaction do
        update_reported_content!
        create_report!
        update_report_count!
      end

      send_report_notification_to_moderators

      if hideable?
        hide!
        send_hide_notification_to_moderators
      end

      broadcast(:ok, report)
    end

    private

    attr_reader :form, :report, :tool

    def create_report!
      @report = @tool.create_report!({
                                       reason: form.reason,
                                       details: form.details
                                     })
    end

    def participatory_space_moderators
      @participatory_space_moderators ||= participatory_space.moderators
    end

    def send_report_notification_to_moderators
      participatory_space_moderators.each do |moderator|
        next unless moderator.email_on_moderations

        ReportedMailer.report(moderator, @report).deliver_later
      end
    end

    def hidden_by_admin?
      form.hide == true && form.context[:can_hide] == true
    end

    def hideable?
      hidden_by_admin? || (!@reportable.hidden? && moderation.report_count >= Decidim.max_reports_before_hiding)
    end

    def hide!
      @tool.hide!
      @tool.send_notification_to_author
    end

    def send_hide_notification_to_moderators
      participatory_space_moderators.each do |moderator|
        next unless moderator.email_on_moderations

        ReportedMailer.hide(moderator, @report).deliver_later
      end
    end

    def participatory_space
      @participatory_space ||= @reportable.component&.participatory_space || @reportable.try(:participatory_space)
    end
  end
end