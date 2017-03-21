class CreateUserProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_profiles do |t|
      t.string :avatar
      t.string :about_me, null: false
      t.integer :user_id, null: false
    end
  end
end
