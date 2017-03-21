class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: false
  validates :minutes, presence: true
  belongs_to :user
end
