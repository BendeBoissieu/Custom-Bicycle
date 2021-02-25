class Api::V1::BicyclesController < ApplicationController
  def index
    @bicycles = Bicycle.all
    render :index, status: :ok
  end
end
