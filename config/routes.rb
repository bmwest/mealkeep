Rails.application.routes.draw do
  get 'browse/breakfast'
  get 'browse/region'
  get 'browse/ingredient'

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
      resources :recipes, only: [:index] do
        resources :instructions, only: [:index, :create, :destroy]
        resources :ingredients, only: [:index, :create, :destroy]
      end
    end
  end

  resources :recipes do
    resources :instructions
    resources :ingredients
  end

  resources :instructions
  resources :ingredients

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
