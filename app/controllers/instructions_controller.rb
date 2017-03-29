class InstructionsController < ApplicationController
  def create
    @recipe = Recipe.find(params[:recipe_id])
    @instruction = Instruction.new(instruction_params)
    @instruction.recipe = @recipe

    if @instruction.save
      flash[:notice] = "Looking good so far!"
      redirect_to recipe_path(@recipe) 
    end
  end

  def destroy
    @recipe = Recipe.find(params[:recipe_id])
    @instruction = Instruction.find(params[:id])
    @instruction.destroy
    redirect_to recipe_path(@recipe), notice: 'Recipe updated.'
  end

  private

  def instruction_params
    params.require(:instruction).permit(:step)
  end
end
