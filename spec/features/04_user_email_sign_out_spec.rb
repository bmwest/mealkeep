require 'rails_helper'

feature "user signs in" do
  let!(:user) { FactoryGirl.create(:user) }

  scenario "an logged-in user signs out a successfully" do
    sign_in(user)

    expect(page).to have_content("Nice to see you again.")
    expect(page).to have_content("Log out")
    expect(page).to_not have_content("Log in")
    expect(page).to_not have_content("Email Sign up")

    click_link "Log out"

    expect(page).to have_content("See you soon")
  end
end
