class Instruction < ApplicationRecord
  validates :step, presence: true
  belongs_to :recipe

  def getInstructions(recipeId)
    Instruction.where(recipe: recipeId).order(updated_at: :desc)
  end
end
