module Api
  class BusinessesController < ApiController
  	def show
  		@business = Business.find(params[:id])
  		render json: @business, :include => :reviews	
  	end

  	def index
  		@businesses = Business.all
  		render json: @businesses
  	end
  end
end