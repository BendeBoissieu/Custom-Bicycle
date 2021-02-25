# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_25_075653) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bicycles", force: :cascade do |t|
    t.bigint "rim_id", null: false
    t.bigint "wheel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["rim_id"], name: "index_bicycles_on_rim_id"
    t.index ["wheel_id"], name: "index_bicycles_on_wheel_id"
  end

  create_table "colors", force: :cascade do |t|
    t.string "name"
    t.string "hexadecimal"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rims", force: :cascade do |t|
    t.bigint "color_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["color_id"], name: "index_rims_on_color_id"
  end

  create_table "wheels", force: :cascade do |t|
    t.float "size"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bicycles", "rims"
  add_foreign_key "bicycles", "wheels"
  add_foreign_key "rims", "colors"
end
