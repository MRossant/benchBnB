Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {formate: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end 
  get "/", to: "static_pages#root"
end
