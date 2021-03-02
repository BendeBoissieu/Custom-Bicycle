Order.all.destroy_all
Bicycle.all.destroy_all
Wheel.all.destroy_all
Rim.all.destroy_all
Color.all.destroy_all
puts "empty"

black = Color.create(name: "black")
blue = Color.create(name: "blue", hexadecimal: "#134984")
green = Color.create(name: "green", hexadecimal: "#40904c")
rim_black = Rim.create(color_id: black.id)
rim_blue = Rim.create(color_id: blue.id)
rim_green = Rim.create(color_id: green.id)
ws17 = Wheel.create(size: 17)
ws19 = Wheel.create(size: 19)
ws20 = Wheel.create(size: 20)
bc_green_17 = Bicycle.create(wheel_id: ws17.id, rim_id: rim_green.id)
bc_green_19 = Bicycle.create(wheel_id: ws19.id, rim_id: rim_green.id)
bc_blue_19 = Bicycle.create(wheel_id: ws19.id, rim_id: rim_blue.id)
bc_green_20 = Bicycle.create(wheel_id: ws20.id, rim_id: rim_green.id)
bc_blue_20 = Bicycle.create(wheel_id: ws20.id, rim_id: rim_blue.id)
bc_black_20 = Bicycle.create(wheel_id: ws20.id, rim_id: rim_black.id)

puts "updated"
