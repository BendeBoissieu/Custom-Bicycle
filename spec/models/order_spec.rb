require 'rails_helper'

RSpec.describe Order, type: :model do
  it { should validate_presence_of(:bicycle_id) }
end
