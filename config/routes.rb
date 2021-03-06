Rails.application.routes.draw do
  root 'pages#index'
  get 'rates' => 'pages#rates'
  post 'create_order' => 'pages#create_order'
  get 'success' => 'pages#orders'
  get 'cancel' => 'pages#orders'
  post 'callback' => 'pages#callback'
  get 'orders' => 'pages#orders'
  get 'about' => 'pages#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
