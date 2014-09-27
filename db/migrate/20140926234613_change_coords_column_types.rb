class ChangeCoordsColumnTypes < ActiveRecord::Migration
  def change
  	remove_column :businesses, :x_coord
  	remove_column :businesses, :y_coord

  	add_column :businesses, :x_coord, :decimal
  	add_column :businesses, :y_coord, :decimal
  end
end
