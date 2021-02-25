require 'rails_helper'

RSpec.describe Wheel, type: :model do
  it {should validate_presence_of(:size) }
  it { should validate_uniqueness_of(:size) }
  it { should validate_numericality_of(:size) }
end
