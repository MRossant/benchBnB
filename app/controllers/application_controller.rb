class ApplicationController < ActionController::Base

    #CELLLR

    # Current User
    # Login!
    # Logged_in?
    # require_logged_out
    # require_logged_in

    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]

        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end
end
