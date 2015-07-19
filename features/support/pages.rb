class HomePage

    def initialize(session)
        @session = session
    end

    def is_service_info_present?
        @session.has_css?('.service-info')
    end

end
