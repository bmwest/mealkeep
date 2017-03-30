class Ingredient < ApplicationRecord
  validates :volume1, presence: true
  validates :volume2, presence: true
  validates :unit, presence: true
  validates :food_item, presence: true
  belongs_to :recipe

  VOLUME_ONE = (0..100).to_a

  VOLUME_TWO = ["0", "1/16", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4"]
  UNIT = ["oz", "mL", "L", "dash", "pinch", "tsp", "Tbsp", "cup", "pt",
          "qt", "gal", "lb"]
end
