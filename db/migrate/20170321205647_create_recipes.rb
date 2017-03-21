class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :hours, default: 0
      t.integer :minutes, default: 0, null: false
      t.string :video
      t.string :photo
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
