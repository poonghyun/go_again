if @closest
	json.closest do
		json.extract!(@closest, :id, :name, :b_type, :created_at, :updated_at, :price, :x_coord, :y_coord)
		json.average_review @closest.average_review
		json.num_reviews @closest.reviews.count
	end
end

json.others @businesses do |business|
	json.id business.id
	json.name business.name
	json.b_type business.b_type
	json.created_at business.created_at
	json.updated_at business.updated_at
	json.price business.price
	json.x_coord business.x_coord
	json.y_coord business.y_coord
end