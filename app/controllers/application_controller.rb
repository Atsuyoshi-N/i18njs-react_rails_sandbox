class ApplicationController < ActionController::Base
  before_action :set_locale
  before_action :configure_permitted_parameters, if: :devise_controller?

  def set_locale
    locale_param = Rails.configuration.i18n.available_locales&.include?(params[:locale].to_s.to_sym) && params[:locale]
    if user_signed_in?
      I18n.locale = locale_param || cookies[:locale] || current_user.locale || I18n.default_locale
      current_user.locale = I18n.locale
      current_user.save
    else
      I18n.locale = locale_param || cookies[:locale] || I18n.default_locale
    end
    cookies[:locale] = I18n.locale.to_s
    gon.locale = I18n.locale.to_s
    @locale_path = I18n.locale==I18n.default_locale ? nil : I18n.locale
  end
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:user_name])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:user_name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:user_name])
  end
end
