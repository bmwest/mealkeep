class Profile < ApplicationRecord
  STARTERS = ["What do you like to cook?",
    "What's your favorite dish?",
    "Who or what is your culinary inspiration?",
    "What's the next recipe you'd like to try?"]

  validates :about_me, presence: true

  belongs_to :user
end
