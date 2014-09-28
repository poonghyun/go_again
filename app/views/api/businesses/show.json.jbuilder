json.(@business, :id, :name, :b_type, :created_at, :updated_at, :price)
json.average_review @business.average_review
json.reviews @business.reviews do |review|
	json.extract! review, :id, :content, :stars, :created_at, :updated_at, :go_again
	json.user review.user
	json.business review.business
end