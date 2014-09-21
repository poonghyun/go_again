class Business < ActiveRecord::Base
	validates :name, :b_type, :price, presence: true
	validates :b_type, inclusion: { in: ["Bars", "Restaurants", "Cafes"], message: "not a valid type" }
	
	has_many :reviews
end
