module Api
  class CategoriesController < ApiController
  	def result
  		# need to add spacing in
  		# it will be one or two words

  		category = params[:category]

  		words = params[:category].split '&'
  		if words.length > 1
  			category = words.first + " & " + words.last
  		end

  		results = Business.find_by_category(category)
  		render json: results
  	end
  end
end