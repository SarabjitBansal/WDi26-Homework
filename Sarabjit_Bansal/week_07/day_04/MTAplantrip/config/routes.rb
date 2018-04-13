Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/pages/index' => 'pages#index'
  get '/pages/info' => 'pages#info'



end
