class UsersController < ApplicationController
	def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
	end

	def new
		@user = User.new
		render :new
	end

	def update
		@user = User.find(params[:id])
		@user.update(user_update_params)
		redirect_to user_url(@user)
	end

	def show
		@user = User.find(params[:id])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

	def user_update_params
		params.require(:user).permit(:fp_url, :about_me)
	end
end
