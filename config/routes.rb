GoAgain::Application.routes.draw do
  resources :users, only: [:create, :new, :show, :edit, :update]
  resource :session, only: [:create, :destroy, :new]
end
