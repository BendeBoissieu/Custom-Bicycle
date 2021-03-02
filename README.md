# README

https://custom-bicycle.herokuapp.com/

To access to the admin part:
Add /admin to the url
https://custom-bicycle.herokuapp.com/admin

On this area, you can see the colors, rims, wheels, bicycles and orders available.

To create a new bicycle, you have to select a wheel and a rim
To create a rim, you have to select a color

Color and Rim are separate, because the colors can be use if we decide to add a Saddle

The orders are only the biycle choosen by the customer, there is no user form to make it more simple.

The endpoint destroy and update are not done.

Endpoint GET all bicycles
/api/v1/bicycles

Endpoint GET all colors
/api/v1/colors

Endpoint GET all rims
/api/v1/rims

Endpoint GET all wheels
/api/v1/wheels

Endpoint GET all orders
/api/v1/orders

Endpoint POST Create a color
curl -i -X POST \
     -H 'Content-Type: application/json'\
     -d '{ "name": "red" }' \
     http://localhost:3000/api/v1/colors

Endpoint POST Create a rim
curl -i -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "color_id": 1 }' \
     http://localhost:3000/api/v1/rims

Endpoint POST Create a wheels
curl -i -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "size": 17 }' \
     http://localhost:3000/api/v1/wheels

Endpoint POST Create a bicycle
curl -i -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "wheel_size_id": 1, rim_id: 2 }' \
     http://localhost:3000/api/v1/bicycles
