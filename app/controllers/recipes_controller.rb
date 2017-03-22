class RecipesController < ApplicationController
  before_action :authorize_user

  def index
    @header = "Recipe Book"
    @user = current_user
    @recipes = Recipe.where(user: @user)
  end

  def new
    @minutes_collection = Recipe::MINUTES
    @hours_collection = Recipe::HOURS
    @user = current_user
    @recipe = Recipe.new
    @recipe.user = @user
  end

  def create
    @user = current_user
    @recipe = Recipe.new(recipe_params)
    @recipe.user = @user

    if @recipe.save
      redirect_to user_recipe_path(id: @recipe, user_id: @user)
      flash[:notice] = "Your Recipe Book has a new entry!"
    else
      render :new
    end
  end

  def edit
    @user = current_user
    @recipe = Recipe.find(params[:id])
    @recipe.user = @user
    @minutes_collection = Recipe::MINUTES
    @hours_collection = Recipe::HOURS
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      redirect_to recipe_path(@recipe), notice: "Recipe Updated!"
    else
      render :edit
    end
  end

  def show
    @user = current_user
    @recipe = Recipe.find(params[:id])
    @header = "#{@recipe.name}"
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    if @recipe.destroy
      redirect_to user_recipes_path(current_user), notice: "Your recipe has a new entry!"
    else
      render :new
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :description, :hours, :minutes, :video, :photo)
  end

  def authorize_user
    unless user_signed_in?
      flash[:notice] = "Please log in to use this feature"
      redirect_to new_user_session_path
    end
  end
end
