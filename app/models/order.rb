class Order < ApplicationRecord
  validates :bicycle_id, presence: true
  belongs_to :bicycle
end
