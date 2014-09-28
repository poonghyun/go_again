json.array! @businesses do |business|
	json.id business.id
	json.name business.name
  json.b_type business.b_type
  json.created_at business.created_at
  json.updated_at business.updated_at
  json.price business.price
  json.average_review business.average_review

	json.reviews business.reviews do |review|
		json.extract! review, :id, :content, :stars, :created_at, :updated_at, :go_again
		json.user review.user
	end
end