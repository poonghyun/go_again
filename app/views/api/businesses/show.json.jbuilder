if @business.reviews.map{ |review| review.user.id }.include?(current_user.id)
	json.reviewed true
else
	json.reviewed false
end

json.current_user_review @business.reviews.find_by_user_id(current_user.id)

json.(@business, :id, :name, :b_type, :created_at, :updated_at, :price)
json.average_review @business.average_review
json.reviews @business.reviews do |review|
	json.extract! review, :id, :content, :stars, :created_at, :updated_at, :go_again
	json.user review.user
	json.business review.business
end