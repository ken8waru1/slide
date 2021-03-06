Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :destroy, :update, :show] do 
      resources :messages, only: [:index]
      resources :users, only: [:index]
    end
    resources :subscriptions, only: [:index, :create, :destroy, :show]
  end
end
