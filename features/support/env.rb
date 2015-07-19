require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'rspec'

class Context

    Capybara.configure do |config|
        config.javascript_driver = :poltergeist
        config.default_driver = :poltergeist
        config.app_host = "http://localhost:8080"
    end

    def site
        Site.new
    end

end

World do
    Context.new
end
