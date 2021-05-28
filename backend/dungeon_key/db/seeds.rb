# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_campaign = Campaign.create(name: "Test")
backup_campaign = Campaign.create(name: "Alternate", description: "This is a test of the description value.")

test_campaign.npcs.build(
    name: "Joe Dirt",
    notes: "The number of David Spade movies far excedes the number of good David Spade movies."
)

backup_campaign.npcs.build(
    name: "Steve the Pirate",
    notes: "'Yarr, I be the dread pirate Steve!'"
)