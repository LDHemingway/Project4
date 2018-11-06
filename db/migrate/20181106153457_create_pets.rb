class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :animal
      t.string :breed
      t.string :size
      t.string :sex
      t.string :location
      t.string :age
      t.integer :pet_id
      t.string :shelter_id

      t.timestamps
    end
  end
end
