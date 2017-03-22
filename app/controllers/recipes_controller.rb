class RecipesController < ApplicationController
  before_action :authorize_user

  def index
    @header = "Recipe Book"
    @user = current_user
    @recipes = Recipe.where(user: @user)
  end

  def show
    @user = current_user
    @recipe = Recipe.find(params[:id])
    @header = "#{@recipe.name}"
  end

  private

  def authorize_user
    unless user_signed_in?
      flash[:notice] = "Please log in to use this feature"
      redirect_to new_user_session_path
    end
  end
end
