class Campaign < ApplicationRecord
    # In the event of deleting a host object, AR *should* delete the depedent NPC objects by assocation
    has_many :npcs, dependent: :destroy

    validates :name, presence: true
end
