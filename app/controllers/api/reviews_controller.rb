module Api
  class ReviewsController < ApiController
  	def show
  		@review = Review.find(params[:id])
  		render json: @review
  	end

  	def create

  	end

  	def destroy

  	end
  end
end