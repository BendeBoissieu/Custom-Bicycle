json.array! @bicycles do |bicycle|
  json.extract! bicycle, :id
  json.rim do
    json.rim_id bicycle.rim.id
    json.color bicycle.rim.color.name
    json.color_hex bicycle.rim.color.hexadecimal
  end
  json.wheel do
    json.wheel_id bicycle.wheel.id
    json.size bicycle.wheel.size
  end
end
