Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get '/customize', to: 'pages#home'
  get '/admin', to: 'pages#home'
  get '/admin/orders', to: 'pages#home'
  get '/confirmation', to: 'pages#home'
  get '/admin/bicycles', to: 'pages#home'
  get '/admin/bicycles/new', to: 'pages#home'
  get '/admin/colors', to: 'pages#home'
  get '/admin/colors/new', to: 'pages#home'
  get '/admin/rims', to: 'pages#home'
  get '/admin/rims/new', to: 'pages#home'
  get '/admin/wheels', to: 'pages#home'
  get '/admin/wheels/new', to: 'pages#home'
  get '/admin/bicycles', to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :bicycles, only: [ :index, :create ]
      resources :colors, only: [ :index, :create ]
      resources :rims, only: [ :index, :create ]
      resources :wheels, only: [ :index, :create ]
      resources :orders, only: [ :index, :create, :show ]
    end
  end
end
