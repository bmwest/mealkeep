class Api::V1::RecipesController < ApplicationController
  def index
    @user = current_user
    render json: Recipe.where(user: @user).order(updated_at: :desc)
  end
end
