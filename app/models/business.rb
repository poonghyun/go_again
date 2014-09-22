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
			"Bakeries"
		],
		message: "not a valid category"
	}
	
	has_many :reviews

	def self.find_by_category(category)
		self.where(b_type: category)
	end
end
