class Api::V1::IngredientsController < ApplicationController

  def index
    @recipe = Recipe.find(params[:recipe_id])
    render json: Ingredient.where(recipe: @recipe).order(updated_at: :asc)
  end

  def create
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = Ingredient.new(ingredient_params)
    @ingredient.recipe = @recipe
    @ingredient.save

    render json: Ingredient.where(recipe: @recipe).order(updated_at: :asc)
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:volume1, :volume2, :unit, :food_item)
  end
end
