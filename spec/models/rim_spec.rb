require 'rails_helper'

RSpec.describe Rim, type: :model do
  it { should belong_to(:color) }
end
