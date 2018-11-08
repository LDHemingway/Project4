class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :pets, through: :favorites
end
