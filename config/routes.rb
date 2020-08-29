Rails.application.routes.draw do
  root 'pages#index'
  get 'rates' => 'pages#rates'
  post 'create_order' => 'pages#create_order'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
