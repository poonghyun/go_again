class RenameTypeColumn < ActiveRecord::Migration
  def change
  	rename_column :businesses, :type, :b_type
  end
end
