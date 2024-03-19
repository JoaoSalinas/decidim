# frozen_string_literal: true

module Decidim
  module Slider
    module Admin
      class TabsController < Decidim::Admin::ApplicationController
        include Decidim::Admin::ContentBlocks::LandingPageContentBlocks

        layout "decidim/admin/settings"

        helper_method :content_block_create_success_text, :content_block_create_error_text
        # before_action :patch_organization        

        private

        def submit_button_text
          t("slider.tabs.save", scope: "decidim.admin")
        end

        def content_block_create_error_text
          t("slider.tabs.create_error", scope: "decidim.admin")
        end

        def content_block_create_success_text
          t("slider.tabs.success_message", scope: "decidim.admin")
        end

        def content_block_destroy_success_text
          t("slider.tabs.destroy_message", scope: "decidim.admin")
        end

        def content_block_destroy_error_text
          t("slider.tabs.destroy_error", scope: "decidim.admin")
        end

        # def patch_organization
        #   upload_size = Decidim::ContentBlock.published.where(
        #     organization: current_organization,
        #     manifest_name: :slider
        #   ).last&.settings&.upload_size

        #   content_block.organization.settings.upload.maximum_file_size.default = upload_size if upload_size.present? && content_block.present?
        # end

        def edit_resource_landing_page_path
          root_path
        end

        def resource_landing_page_content_block_path
          tab_path(params[:id])
        end

        def scoped_resource
          nil
        end

        def content_block_scope
          :slider_tabs
        end

        def enforce_permission_to_update_resource
          enforce_permission_to :update, :organization, organization: current_organization
        end
      end
    end
  end
end
