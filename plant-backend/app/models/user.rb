class User < ApplicationRecord
    has_many :favorites
    has_many :plants, through: :favorites
end
