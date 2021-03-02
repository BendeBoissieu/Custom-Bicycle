class Bicycle < ApplicationRecord
  belongs_to :rim
  belongs_to :wheel
  has_many :orders
  validates :rim, uniqueness: { scope: [:wheel] }
end
