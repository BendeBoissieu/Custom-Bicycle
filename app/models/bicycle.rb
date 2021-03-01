class Bicycle < ApplicationRecord
  belongs_to :rim
  belongs_to :wheel
  validates :rim, uniqueness: { scope: [:wheel] }
end
