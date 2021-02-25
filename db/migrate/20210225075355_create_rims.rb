class CreateRims < ActiveRecord::Migration[6.0]
  def up
    create_table :rims do |t|
      t.references :color, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table "rims"
  end
end
