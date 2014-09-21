class AddGoAgainColumnToReview < ActiveRecord::Migration
  def change
  	add_column :reviews, :go_again, :boolean
  end
end
