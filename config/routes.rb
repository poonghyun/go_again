GoAgain::Application.routes.draw do
	root to: 'static_pages#root'

  resources :users, only: [:create, :new, :update]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
  	resources :businesses, only: [:show, :index]
    resources :users, only: [:show, :update]
  	resources :reviews, only: [:show, :create, :destroy, :index, :update]
  	resources :photos, only: [:show, :create, :destroy, :index]
  	get 'cat/:category' => 'categories#result'
  	get 'b/search' => 'businesses#search'
    get 'b/range' => 'businesses#range'
  end
end
