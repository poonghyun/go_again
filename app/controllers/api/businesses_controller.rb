module Api
  class BusinessesController < ApiController
  	def show
  		@business = Business.find(params[:id])
      render :show
  	end

  	def index
  		@businesses = Business.all
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

    def range
      x_range = params[:query][0]
      y_range = params[:query][1]
      center = params[:query][2]

      @businesses = Business.find_in_bounds(x_range, y_range)
      @closest = Business.find_closest(center, @businesses)

      @businesses = @businesses.where.not(id: @closest.id)

      render :range
    end
  end
end