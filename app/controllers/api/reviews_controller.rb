module Api
  class ReviewsController < ApiController
  	def show
  		@review = Review.find(params[:id])
  		render json: @review
  	end

    def index
      @reviews = Review.retrieve(params[:page])
      render json: @reviews
    end

  	def create

  	end

  	def destroy

  	end
  end
end