class CreateColors < ActiveRecord::Migration[6.0]
  def up
    create_table :colors do |t|
      t.string :name
      t.string :hexadecimal

      t.timestamps
    end
  end

  def down
    drop_table "colors"
  end
end
