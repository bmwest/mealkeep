class Api::V1::InstructionsController < ApplicationController
  def index
    @id = params[:recipe_id]
    @recipe = Recipe.where(id: @id)
    render json: Instruction.where(recipe: @recipe).order(updated_at: :desc)
  end
end
