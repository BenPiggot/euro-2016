class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :goals_for
      t.integer :goals_against
      t.string :badge_url

      t.timestamps null: false
    end
  end
end
