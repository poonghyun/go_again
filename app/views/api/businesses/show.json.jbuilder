json.(@business, :name, :b_type, :created_at, :updated_at, :price)
json.reviews @business.reviews do |review|
	json.extract! review, :content, :stars, :created_at, :updated_at, :go_again
	json.user review.user
	json.business review.business
end