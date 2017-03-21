require 'rails_helper'

feature "user creates a profile" do
  let!(:user) { FactoryGirl.create(:user) }

  xit "a logged-in user successfully creates a profile" do
    sign_in(user)

    expect(page).to have_content("Nice to see you again.")
    expect(page).to have_content("Log out")
    expect(page).to_not have_content("Log in")
    expect(page).to_not have_content("Email Sign up")


    click_link "Create a Profile"

    expect(page).to have_content("Let's get started")
    expect(page).to have_content("Some things to think about:")
    expect(page).to have_content("What do you like to cook?")
    expect(page).to have_content("What's your favorite dish?")
    expect(page).to have_content("Who or what is your culinary inspiration?")
    expect(page).to have_content("What's the next recipe you'd like to try?")

    fill_in "About Me", with: 'I like cake and pie'
    click_button "Save"

    expect(page).to have_content("View Your Profile")
    expect(page).to have_content("Edit Your Profile")
    expect(page).to_not have_content("Create a Profile")
    expect(page).to have_content("You're all set! Now, let's get cooking")
    expect(page).to have_content("A little bit about #{user.first_name},")
    expect(page).to have_content(user.profile[0].about_me)
  end

  let!(:profile) { FactoryGirl.create(:profile, user: user) }
  scenario "user visits profile page" do
    sign_in(user)

    expect(page).to have_content("View Your Profile")
    expect(page).to have_content("Edit Your Profile")
    expect(page).to_not have_content("Create a Profile")

    click_link "View Your Profile"

    expect(page).to have_content("A little bit about #{user.first_name},")
    expect(page).to have_content(user.profile[0].about_me)
  end

  scenario "user edits profile page" do
    sign_in(user)

    expect(page).to have_content("View Your Profile")
    expect(page).to have_content("Edit Your Profile")
    expect(page).to_not have_content("Create a Profile")

    click_link "Edit Your Profile"

    fill_in "About Me", with: 'I like cake and pie'
    click_button "Save"

    expect(page).to have_content(user.profile[0].about_me)
  end
end
