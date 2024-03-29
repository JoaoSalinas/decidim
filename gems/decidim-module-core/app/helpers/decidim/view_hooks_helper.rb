# frozen_string_literal: true

module Decidim
  # This module includes helpers to manage view hooks in layout
  module ViewHooksHelper
    # Public: Renders all hooks registered as `hook_name`.
    #
    # @param hook_name [Symbol] representing the name of the hook.
    #
    # @return [String] an HTML safe String
    def render_hook(hook_name)
      Decidim.view_hooks.render(hook_name, self)
    end
  end
end
