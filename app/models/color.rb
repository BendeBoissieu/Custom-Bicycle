class Color < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :hexadecimal, uniqueness: true, :allow_blank => true, :allow_nil => true
end
