# frozen_string_literal: true

shared_examples "amendment rejected event" do
  include_context "when a simple event"

  let(:resource) { emendation }
  let(:event_name) { "decidim.events.amendments.amendment_rejected" }

  it_behaves_like "a simple event"
  it_behaves_like "a simple event email"
  it_behaves_like "a simple event notification"

  let(:emendation_author_nickname) { "@#{emendation.creator_author.nickname}" }
  let(:emendation_path) { Decidim::ResourceLocatorPresenter.new(emendation).path }
  let(:emendation_author_path) { Decidim::UserPresenter.new(emendation.creator_author).profile_path }
  let(:amendable_path) { Decidim::ResourceLocatorPresenter.new(amendable).path }

  let(:email_subject) { "Amendment rejected for #{amendable_title} from #{emendation_author_nickname}" }
  let(:email_intro) { "An amendment has been rejected for #{amendable_title}. You can see it from this page:" }
  let(:email_outro) { "You have received this notification because you are following #{amendable_title}. You can stop receiving notifications following the previous link." }

  let(:notification_title) { "The <a href=\"#{emendation_path}\">amendment</a> created by <a href=\"#{emendation_author_path}\">#{emendation_author_nickname}</a> has been rejected for <a href=\"#{amendable_path}\">#{amendable_title}</a>." } # rubocop:disable Layout/LineLength
end
