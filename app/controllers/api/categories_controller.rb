module Api
  class CategoriesController < ApiController
  	def result
  		category = params[:category]

  		words = params[:category].split '&'

      if words.length > 1
        category = words.map { |word| split_on_caps(word) }.join " & "
      else # no amp
        category = split_on_caps(category)
      end

  		results = Business.find_by_category(category)
  		render json: results
  	end

    private

    # helper method to split a string with caps with spaces
    # i.e. "FoodCarts" -> "Food Carts"
    def split_on_caps(word)
      word.split(/(?=[A-Z])/).join(" ")
    end
  end
end