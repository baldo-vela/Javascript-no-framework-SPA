class Campaign < ApplicationRecord
    has_many :npcs

    validates :name, presence: true
end
