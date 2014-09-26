class AddCoordToBusiness < ActiveRecord::Migration
  def change
  	add_column :businesses, :coord, :string
  end
end
