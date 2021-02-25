require 'rails_helper'

RSpec.describe 'Wheels API', type: :request do

  let!(:wheel1) { Wheel.create(size: 17) }

  describe 'GET /api/v1/wheels' do
    before do
      get '/api/v1/wheels'
    end

    it 'returns wheels' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for POST /rims
  describe 'POST /api/v1/wheels' do
    # valid payload
    let(:valid_attributes) { { size: 23 } }

    context 'when the request is valid' do
      before { post '/api/v1/wheels', params: valid_attributes }

      it 'creates a wheel' do
        expect(json['data']['size']).to eq(23)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/wheels', params: { } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

    end
  end
end
