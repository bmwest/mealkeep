class Api::V1::InstructionsController < ApplicationController
  def index
    binding.pry
    @recipe = Recipe.find(params[:recipe_id])
    # binding.pry
    render json: Instruction.where(recipe: @recipe).order(updated_at: :desc)
  end
end
