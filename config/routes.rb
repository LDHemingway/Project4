Rails.application.routes.draw do
  namespace :api do
    resources :pets
    resources :users do
      resources :users_pets
    end
  end
end
