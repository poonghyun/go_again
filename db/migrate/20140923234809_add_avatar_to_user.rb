class AddAvatarToUser < ActiveRecord::Migration
  def change
  	add_column :users, :fp_url, :string
  end
end
