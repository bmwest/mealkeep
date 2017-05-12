class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
  end

  def authenticate_admin!
    unless user_signed_in? && current_user.admin?
      redirect_to root_path, notice: "We're sorry, this resource is reserved" +
        " exclusively for site admins."
    end
  end
end
