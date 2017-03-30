class CreateIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.integer :volume1, defaut: 0, null: false
      t.string :volume2, defaut: "0", null: false
      t.string :unit, null: false
      t.string :food_item, null: false
      t.integer :recipe_id, null: false

      t.timestamps
    end
  end
end
