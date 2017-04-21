class AddNameToDemos < ActiveRecord::Migration[5.0]
  def change
    add_column :demos, :name, :string
  end
end
