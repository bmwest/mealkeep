class IngredientsController < ApplicationController
  def new
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = Ingredient.new(ingredient_params)
    @volume1_collection = Ingredient::VOLUME_ONE
    @volume2_collection = Ingredient::VOLUME_TWO
    @unit_collection = Ingredient::UNITS
    @ingredient.recipe = @recipe
  end

  def create
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = Ingredient.new(ingredient_params)
    @volume1_collection = Ingredient::VOLUME_ONE
    @volume2_collection = Ingredient::VOLUME_TWO
    @unit_collection = Ingredient::UNIT
    @ingredient.recipe = @recipe

    if @ingredient.save
      flash[:notice] = "Looking good so far!"
      redirect_to recipe_path(@recipe)
    end
  end

  def destroy
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
    redirect_to recipe_path(@recipe), notice: 'Recipe updated.'
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:volume1, :volume2, :unit, :food_item)
  end
end
