class Npc < ApplicationRecord
    belongs_to :campaign

    validates :name, presence: true
end
