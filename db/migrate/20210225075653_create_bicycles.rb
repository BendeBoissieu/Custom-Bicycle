class CreateBicycles < ActiveRecord::Migration[6.0]
  def up
    create_table :bicycles do |t|
      t.references :rim, null: false, foreign_key: true
      t.references :wheel, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table "bicycles"
  end
end
