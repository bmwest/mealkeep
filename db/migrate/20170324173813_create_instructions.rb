class CreateInstructions < ActiveRecord::Migration[5.0]
  def change
    create_table :instructions do |t|
      t.string :step, null: false
      t.integer :recipe_id, null: false

      t.timestamps
    end
  end
end
