json.array! @rims do |rim|
  json.extract! rim, :id
  json.color do
    json.name rim.color.name
    json.hex rim.color.hexadecimal
  end
end
