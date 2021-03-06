json.(@user, :id, :username, :created_at, :about_me, :fp_url)
json.current_user_id current_user.id
json.reviews @user.reviews do |review|
	json.extract! review, :id, :content, :stars, :created_at, :updated_at, :go_again
	json.business review.business
	json.user review.user
	json.current_user_id current_user.id

	json.photos review.photos do |photo|
		json.extract! photo, :id, :created_at, :fp_url, :caption
	end
end
json.photos @user.photos do |photo|
	json.extract! photo, :id, :created_at, :fp_url, :caption
	json.review photo.review
end