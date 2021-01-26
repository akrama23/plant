class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :sun
      t.string :image
      t.string :water

      t.timestamps
    end
  end
end
