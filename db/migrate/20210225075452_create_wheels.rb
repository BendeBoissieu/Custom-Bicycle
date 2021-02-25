class CreateWheels < ActiveRecord::Migration[6.0]
  def up
    create_table :wheels do |t|
      t.float :size

      t.timestamps
    end
  end

  def down
    drop_table "wheels"
  end
end
