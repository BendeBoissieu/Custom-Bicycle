require 'rails_helper'

RSpec.describe 'Colors API', type: :request do

  let!(:color1) { Color.create(name: "black") }

  describe 'GET /api/v1/colors' do
    before do
      get '/api/v1/colors'
    end

    it 'returns colors' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for POST /colors
  describe 'POST /colors' do
    # valid payload
    let(:valid_attributes) { { name: 'Green', hexadecimal: '#71FF33' } }

    context 'when the request is valid' do
      before { post '/api/v1/colors', params: valid_attributes }

      it 'creates a color' do
        expect(json['data']['name']).to eq('Green')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/colors', params: { hexadecimal: '#71FF33' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

    end
  end
end
