# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

gem "decidim", "0.28.0"
# gem "decidim-conferences", "0.28.0"
# gem "decidim-design", "0.28.0"
# gem "decidim-initiatives", "0.28.0"
# gem "decidim-templates", "0.28.0"
gem "decidim-core", path: "gems/decidim-module-core"

gem "decidim-elections", "0.28.0"
gem "faraday"
gem "decidim-bulletin_board", "~> 0.24.4"
gem "graphlient", "~> 0.5.0"

gem "bootsnap", "~> 1.3"

gem "decidim-slider", path: "gems/decidim-module-slider"

gem "puma", ">= 6.3.1"

gem "wicked_pdf", "~> 2.1"

gem "figaro"

gem "strscan", "3.0.7"

#gem "decidim-slider"

# gem "decidim-calendar", git: "https://github.com/openpoke/decidim-module-calendar/"
gem "decidim-calendar", path: "gems/decidim-module-calendar"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "brakeman", "~> 5.4"
  gem "decidim-dev", "0.28.0"
  gem "net-imap", "~> 0.2.3"
  gem "net-pop", "~> 0.1.1"
  gem "net-smtp", "~> 0.3.1"
end

group :development do
  gem "letter_opener_web", "~> 2.0"
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 4.2"
end

group :production do
  gem "passenger"
  gem "delayed_job_active_record"
  gem "daemons"
end
