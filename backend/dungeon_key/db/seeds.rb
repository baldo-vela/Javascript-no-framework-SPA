# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_campaign = Campaign.create(name: "Test", description: "It's totally a real place....Description cannot be null")
backup_campaign = Campaign.create(name: "The Averge Joes", description: "The saga of how a bunch of 'average' people save their favorite afterwork hangout by playing...dodgeball.")
lebowski = Campaign.create(name: "The Big Lebowski Dungeon Crawl", description:"Okay so it's a story about The Dude...")
nrfaw = Campaign.create(name: "No Room for a Wallflower", description: "Listen up Lancers, on the distant world of Hercynia a distress call goes out.")
greyhawk = Campaign.create(name: "Expedition to Castle Greyhawk", description: "Bold explorers delve into the ruins of the mad mage Zygyg, the late lord mayor of the great gem of the Flanness.")
eclipse_phase = Campaign.create(name: "The Black Spot", description: "Totally not a rip off of Treasure Island...Sentinels, the trans-human agents of Firewall, the interplanetary conspiracy are set to protect all that remains of Earth from existential threats.")

test_campaign.npcs.build(
    name: "Joe Dirt",
    notes: "The number of David Spade movies far excedes the number of good David Spade movies."
)   

backup_campaign.npcs.build(
    name: "Steve the Pirate",
    notes: "'Yarr, I be the dread pirate Steve!'"
)

lebowski.npcs.build(
    name: "The Dude", 
    notes: "Loves day-drinking white russians, hates people messing with his vibe."
)
lebowski.npcs.build(
    name: "Donnie",
    notes: "Theodore Donald Kerabatsos aka Donny (played by Steve Buscemi) is the tertiary protagonist a friend of The Dude and Walter. He's an avid, incorrupt bowler and frustrates Walter."
)

nrfaw.npcs.build(
    name: "Patience", 
    notes: "Not Skynet, just a very overworked and worried NHP. The govenor of Evergreen Colony"
)

greyhawk.npcs.build(
    name: "Iggwilv",
    notes: "Iggwilv is said to have two forms, one of which is that of an old crone (said to be her true form), and the other, a human female of dark beauty. In the latter form, Iggwilv has long black hair and pale skin. It is said none who have seen her in her true form still live. She has many alternate names. On Oerth she has been called the Witch Queen of Perrenland and the Mother of Witches. She is known as Louhi on one alternate Prime Material Plane world, and as Ychbilch on another. Those close to her sometimes address her as Wilva."
)

eclipse_phase.npcs.build(
    name: "Sputnik",
    notes: "Nanotech engineeer & Firewall Sentinel. Current morph octopus updlift"
)
eclipse_phase.npcs.build(
    name: "Tyrus",
    notes: "Firewall Router, mission handler. Current Morph: unknown"
)

test_campaign.save
backup_campaign.save
lebowski.save
nrfaw.save
greyhawk.save
eclipse_phase.save
