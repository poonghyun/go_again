module Api
  class ReviewsController < ApiController
  	def show
  		@review = Review.find(params[:id])
  		render :show
  	end

    def index
      @reviews = Review.retrieve(params[:page])
      render :index
    end

  	def create

  	end

  	def destroy

  	end
  end
end