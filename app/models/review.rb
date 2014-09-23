class Review < ActiveRecord::Base
	validates :content, :stars, :user_id, :business_id, :go_again, presence: true
	validates :user_id, uniqueness: { scope: :business_id, message: "user can only review business once" }

	belongs_to :user
	belongs_to :business
	has_many :photos
end
