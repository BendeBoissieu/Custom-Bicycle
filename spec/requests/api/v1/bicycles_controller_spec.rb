require 'rails_helper'

RSpec.describe 'Bicycles API', type: :request do

  let!(:color1) { Color.create(name: "black") }
  let!(:rim1) { Rim.create(color_id: color1.id) }
  let!(:wheel1) { Wheel.create(size: 17) }
  let!(:bicycle1) { Bicycle.create(wheel_id: wheel1.id, rim_id: rim1.id) }

  describe 'GET /api/v1/bicycles' do
    before do
      get '/api/v1/bicycles'
    end

    it 'returns bicycles' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
