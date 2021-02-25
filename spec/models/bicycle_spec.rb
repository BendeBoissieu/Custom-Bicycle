require 'rails_helper'

RSpec.describe Bicycle, type: :model do
  it { should belong_to(:wheel) }
  it { should belong_to(:rim) }
end
