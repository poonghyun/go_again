GoAgain::Application.routes.draw do
	root to: 'static_pages#root'

  resources :users, only: [:create, :new, :show, :update]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
  	resources :businesses, only: [:show, :index]
    resources :users, only: [:show]
  	resources :reviews, only: [:show, :create, :destroy, :index]
  	resources :photos, only: [:show, :create, :destroy, :index]
  	get 'cat/:category' => 'categories#result'
  	get 'b/search' => 'businesses#search'
  end
end
