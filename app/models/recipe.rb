class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: false
  validates :minutes, presence: true
  belongs_to :user
  has_many :instructions

  MINUTES = [0, 5,10, 15,
            20, 25, 30, 35,
            40,45, 50, 55]

  HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
end
