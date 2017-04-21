class Demo < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: false
  validates :video, presence: true
end
