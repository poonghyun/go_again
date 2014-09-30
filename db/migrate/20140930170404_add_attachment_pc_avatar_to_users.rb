class AddAttachmentPcAvatarToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :pc_avatar
    end
  end

  def self.down
    remove_attachment :users, :pc_avatar
  end
end
