class Business < ActiveRecord::Base
	validates :name, :b_type, :price, presence: true
	validates :b_type, inclusion: { in: ["Bars", "Restaurants", "Cafes"], message: "not a valid type" }
	
	has_many :reviews

	def self.find_by_category(category)
		self.where(b_type: category)
	end
end
