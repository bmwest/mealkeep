class RecipesController < ApplicationController
  def index
    @header = "Recipe Book"
    @user = current_user
    @recipes = Recipe.where(user: @user)
  end
end
