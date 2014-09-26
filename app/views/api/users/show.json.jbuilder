json.(@user, :username, :created_at, :about_me, :fp_url)
json.reviews @user.reviews do |review|
	json.extract! review, :content, :stars, :created_at, :updated_at, :go_again
	json.business review.business
end
json.photos @user.photos do |photo|
	json.extract! photo, :created_at, :fp_url, :caption
	json.review photo.review
end