module Api
  class UsersController < ApiController
  	def show
  		@user = User.find(params[:id])
      render :show
  	end

		def update
			@user = User.find(params[:id])
			@user.update(about_me: params[:about_me])
			render :update
		end
  end
end