class Site

    def visit_home_page
        session = Capybara.current_session
        session.visit '/'
        HomePage.new session
    end

end
