class Api::V1::ColorsController < ApplicationController
  def index
    @colors = Color.all
    render json: @colors, status: :ok
  end

  def create
    color = Color.new(color_params)
    if color.save
      render json: {status: 'SUCCESS', message: 'color created', data: color}, status: :ok
    else
      render json: {status: 'ERROR', message: 'color not saved', data: color.errors}, status: :unprocessable_entity
    end
  end

  private

  def color_params
    params.permit(:name, :hexadecimal)
  end
end
