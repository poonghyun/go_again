class UsersController < ApplicationController
	def create

	end

	def new

	end

	def update

	end

	def edit

	end

	def show

	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end
end
