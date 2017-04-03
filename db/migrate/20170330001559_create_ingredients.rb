class CreateIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.integer :volume1
      t.string :volume2
      t.string :unit
      t.string :food_item, null: false
      t.integer :recipe_id, null: false

      t.timestamps
    end
  end
end
