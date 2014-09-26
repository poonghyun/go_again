class Business < ActiveRecord::Base
	validates :name, :b_type, :price, presence: true
	validates :b_type, inclusion: {
		in: [
			"Bars & Nightlife",
			"Restaurants",
			"Coffee & Tea",
			"Arts & Entertainment",
			"Shopping",
			"Hotels & Travel",
			"Beauty & Spas",
			"Bakeries",
			"Food Carts",
			"Gyms",
			"Health & Medical",
			"Home Services"
		],
		message: "not a valid category"
	}
	
	has_many :reviews
	has_many :photos, through: :reviews

	def self.find_by_category(category)
		self.where(b_type: category)
	end

	def average_rating
		total = 0
		self.reviews.each do |review|
			total += review.stars
		end

		(total.to_f / self.reviews.count).round(2)
	end
end
