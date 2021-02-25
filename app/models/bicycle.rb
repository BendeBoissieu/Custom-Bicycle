class Bicycle < ApplicationRecord
  belongs_to :rim
  belongs_to :wheel
end
