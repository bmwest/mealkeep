Rails.application.routes.draw do
  get 'welcome/index'
  devise_for :users

  resources :users do
    resources :profiles, only: [:new, :create, :show, :edit, :update, :destroy]
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
