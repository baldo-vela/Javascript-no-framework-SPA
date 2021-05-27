class CreateNpcs < ActiveRecord::Migration[6.0]
  def change
    create_table :npcs do |t|
      t.string :name
      t.text :notes
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
