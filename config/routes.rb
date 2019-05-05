Rails.application.routes.draw do
  devise_for :users
  scope '(:locale)', locale: /#{I18n.available_locales.map(&:to_s).join('|')}/ do
    root "posts#index"
    resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
