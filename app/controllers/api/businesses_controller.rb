module Api
  class BusinessesController < ApiController
  	def show
  		@business = Business.find(params[:id])
  		render json: @business, :include => :reviews	
  	end
  end
end