class Api::V1::InstructionsController < ApplicationController
  def index
    @user = current_user
    @recipes = @user.recipes
    # @recipe = Recipe.find(params[:recipe_id])
    render json: Instruction.where(recipe: @recipes).order(updated_at: :desc)
  end
end
