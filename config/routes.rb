Rails.application.routes.draw do
  namespace :api do
    resources :pets
    resources :users do
      resources :favorites
    end
  end
end
