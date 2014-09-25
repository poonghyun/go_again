json.array! @reviews do |review|
	json.extract! review, :content, :stars, :created_at, :updated_at, :go_again
	json.user review.user
	json.business review.business
end