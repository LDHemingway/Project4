Rails.application.routes.draw do
  namespace :api do
    resources :user do
      resources :pet
    end
  end
end
