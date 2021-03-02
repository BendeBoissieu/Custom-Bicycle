require 'rails_helper'

RSpec.describe 'Orders API', type: :request do

  let!(:color1) { Color.create(name: "black") }
  let!(:rim1) { Rim.create(color_id: color1.id) }
  let!(:wheel1) { Wheel.create(size: 17) }
  let!(:bicycle1) { Bicycle.create(wheel_id: wheel1.id, rim_id: rim1.id) }
  let!(:order1) { Order.create(bicycle_id: bicycle1.id) }

  describe 'GET /api/v1/orders' do
    before do
      get '/api/v1/orders'
    end

    it 'returns orders' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for POST /orders
  describe 'POST /orders' do
    # valid payload
    let(:valid_attributes) { { bicycle_id: bicycle1.id } }

    context 'when the request is valid' do
      before { post '/api/v1/orders', params: valid_attributes }

      it 'creates a order' do
        expect(json['data']['bicycle_id']).to eq(bicycle1.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/orders', params: { hexadecimal: '#71FF33' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

    end
  end
end
