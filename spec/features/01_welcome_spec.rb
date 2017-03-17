require 'rails_helper'

feature "user visits homepage" do
  scenario "user sees welcome message" do
    visit root_path
    expect(page).to have_content("hi there.")
  end
end
