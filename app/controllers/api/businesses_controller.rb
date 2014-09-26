module Api
  class BusinessesController < ApiController
  	def show
  		@business = Business.find(params[:id])
  		# render json: @business, :include => :reviews
      render :show
  	end

  	def index
  		@businesses = Business.all
  		# render json: @businesses
      render :index
  	end

    def search
      if params[:query].present?
        @businesses = Business.where("lower(name) ~ ?", params[:query].downcase)
      else
        @businesses = Business.none
      end

      render json: @businesses
    end
  end
end