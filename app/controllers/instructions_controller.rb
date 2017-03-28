class InstructionsController < ApplicationController
  def new
    @user = current_user
    @recipe = Recipe.where(user: @user)
    @recipe.user = @user
    @ingredient = Ingredient.new
    @ingredient.recipe = @recipe
  end

  def create
    @user = current_user
    @recipe = Recipe.where(user: @user)
    @recipe.user = @user
    @ingredient = Ingredient.new
    @ingredient.recipe = @recipe

    if @recipe.save
      redirect_to user_recipe_path(id: @recipe, user_id: @user)
      flash[:notice] = "Your Recipe Book has a new entry!"
    else
      render :new
    end
  end
end
