class Api::V1::OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders, status: :ok
  end

  def create
    order = Order.new(order_params)
    if order.save
      render json: {status: 'SUCCESS', message: 'order created', data: order}, status: :ok
    else
      render json: {status: 'ERROR', message: 'order not saved', data: order.errors}, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.permit(:bicycle_id, :name)
  end
end
