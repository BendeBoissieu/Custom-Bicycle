require 'rails_helper'

RSpec.describe 'Rims API', type: :request do

  let!(:color1) { Color.create(name: "green") }
  let!(:rim1) { Rim.create(color_id: color1.id) }

  describe 'GET /api/v1/rims' do
    before do
      get '/api/v1/rims'
    end

    it 'returns rims' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for POST /rims
  describe 'POST /api/v1/rims' do
    # valid payload
    let!(:color2) { Color.create(name: "red") }
    let(:valid_attributes) { { color_id: color2.id } }

    context 'when the request is valid' do
      before { post '/api/v1/rims', params: valid_attributes }

      it 'creates a rim' do
        expect(json['data']['color_id']).to eq(color2.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/rims', params: { } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

    end
  end
end
