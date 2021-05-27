class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name,
      t.string :system,
      t.string :event,
      t.string :time

      t.timestamps
    end
  end
end
