When(/^\w+ visits the site$/) do
  @page = site.visit_home_page
end

Then(/^s?he is shown information about the services$/) do
  expect(@page.is_service_info_present?).to be true
end
