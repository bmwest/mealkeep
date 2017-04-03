class Api::V1::InstructionsController < ApplicationController

  def index
    @recipe = Recipe.find(params[:recipe_id])
    render json: Instruction.where(recipe: @recipe).order(updated_at: :asc)
  end

  def create
    @recipe = Recipe.find(params[:recipe_id])
    @instruction = Instruction.new(instruction_params)
    @instruction.recipe = @recipe
    @instruction.save

    render json: Instruction.where(recipe: @recipe).order(updated_at: :desc)
  end

  def destroy
    @instruction = Instruction.find(params[:id])
    @instruction.destroy
  end

  private

  def instruction_params
    params.require(:instruction).permit(:step)
  end
end
