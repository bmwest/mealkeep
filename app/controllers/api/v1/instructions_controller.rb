class Api::V1::InstructionsController < ApplicationController
  def index
    @user = current_user
    @recipes = Recipe.where(user: @user)
    @instruction = Instruction.where(recipe: @recipe).order(updated_at: :desc)
    render json: Instruction.where(recipe: @recipes).order(updated_at: :desc)
  end
end
