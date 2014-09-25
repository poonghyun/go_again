class Review < ActiveRecord::Base
	validates :content, :stars, :user_id, :business_id, :go_again, presence: true
	validates :user_id, uniqueness: { scope: :business_id, message: "user can only review business once" }

	belongs_to :user
	belongs_to :business
	has_many :photos

	def self.retrieve(page = nil)
		reviews = Review.all.order(updated_at: :desc)
		if page
			reviews.limit(5).offset(page.to_i * 5)
		else
			reviews.limit(5)
		end
	end
end
