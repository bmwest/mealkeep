class Api::V1::InstructionsController < ApplicationController
  def index
    @recipe = Recipe.find(params[:recipe_id])
    render json: Instruction.where(recipe: @recipe).order(updated_at: :desc)
  end
end
