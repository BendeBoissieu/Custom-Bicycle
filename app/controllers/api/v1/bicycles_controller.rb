class Api::V1::BicyclesController < ApplicationController
  def index
    @bicycles = Bicycle.all
    render :index, status: :ok
  end

  def create
    bicycle = Bicycle.new(bicycle_params)
    if bicycle.save
      render json: {status: 'SUCCESS', message: 'bicycle created', data: bicycle}, status: :ok
    else
      render json: {status: 'ERROR', message: 'bicycle not saved', data: bicycle.errors}, status: :unprocessable_entity
    end
  end

  private

  def bicycle_params
    params.permit(:rim_id, :wheel_id)
  end
end
