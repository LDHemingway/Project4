class Pet < ApplicationRecord
    has_many :favorites, dependent: :destroy
end
