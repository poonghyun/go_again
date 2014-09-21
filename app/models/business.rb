class Business < ActiveRecord::Base
	validates :name, :type, :price, presence: true
	validates :type, inclusion: { in: ["Bars", "Restaurants", "Cafes"], message: "not a valid type" }
	
	has_many :reviews
end
