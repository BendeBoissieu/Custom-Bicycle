class Wheel < ApplicationRecord
  validates_presence_of :size
  validates :size, uniqueness: true, numericality: { only_float: true }
end
