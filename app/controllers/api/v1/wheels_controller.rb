class Api::V1::WheelsController < ApplicationController
  def index
    @wheels = Wheel.all
    render json: @wheels, status: :ok
  end

  def create
    wheel = Wheel.new(wheel_params)
    if wheel.save
      render json: {status: 'SUCCESS', message: 'wheel created', data: wheel}, status: :ok
    else
      render json: {status: 'ERROR', message: 'wheel not saved', data: wheel.errors}, status: :unprocessable_entity
    end
  end

  private

  def wheel_params
    params.permit(:size)
  end
end
