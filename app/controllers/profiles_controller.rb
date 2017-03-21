class ProfilesController < ApplicationController
  before_action :authorize_user

  def new
    @user = current_user
    @profile = Profile.new
    @header = "Let's get started"
    @prompt = "Some things to think about:"
    @starters = Profile::STARTERS
  end

  def create
    @user = current_user
    @profile = Profile.new(profile_params)
    @profile.user = @user

    if @profile.save
      redirect_to user_profile_path(id: @profile, user_id: @user)
      flash[:notice] = "You're all set! Now, let's get cooking"
    else
      flash[:notice] = @profile.errors.full_messages
      render :new
    end
  end

  def show
    @user = current_user
    @profile = Profile.where(user: @user)[0]
    # @avatar = @profile.avatar
    @about_me = @profile.about_me
  end

  def edit
    @user = current_user
    @profile = Profile.where(user: @user)[0]
  end

  def update
    @user = current_user
    @profile = Profile.where(user: @user)[0]

    if @profile.update(profile_params)
      redirect_to user_profile_path(id: @profile, user_id: @user)
      flash[:notice] = "You're profile has been successfully upated"
    else
      render :edit
    end
  end

  def destroy
    @user = current_user
    @profile = Profile.where(user: @user)[0]

    if @profile.destroy
      redirect_to root_path, notice: "Your profile has been deleted. " +
        "To cancel your account, you may select 'Cancel My Account' from the " +
        "'Settings' menu."
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:about_me, :avatar)
  end

  def authorize_user
   unless user_signed_in?
     flash[:notice] = "Please log in to use this feature"
     redirect_to new_user_session_path
   end
 end
end
