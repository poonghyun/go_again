class ChangeCoordToXandY < ActiveRecord::Migration
  def change
  	remove_column :businesses, :coord

  	add_column :businesses, :x_coord, :integer
  	add_column :businesses, :y_coord, :integer
  end
end
