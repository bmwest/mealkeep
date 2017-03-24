Rails.application.routes.draw do
  get 'welcome/index'
  get 'welcome/show'
  devise_for :users

  resources :users do
    resources :profiles, only: [:new, :create, :show, :edit, :update, :destroy]
  end

  resources :users do
    resources :recipes
  end

  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index]
    end
  end

  resources :recipes

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
