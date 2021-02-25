class Api::V1::RimsController < ApplicationController
  def index
    @rims = Rim.all
    render :index, status: :ok
  end

  def create
    rim = Rim.new(rim_params)
    if rim.save
      render json: {status: 'SUCCESS', message: 'rim created', data: rim}, status: :ok
    else
      render json: {status: 'ERROR', message: 'rim not saved', data: rim.errors}, status: :unprocessable_entity
    end
  end

  private

  def rim_params
    params.permit(:color_id)
  end
end
