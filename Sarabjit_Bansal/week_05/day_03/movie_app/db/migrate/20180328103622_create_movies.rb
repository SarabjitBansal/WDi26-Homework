class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :name
      t.text :year
      t.text :language
      t.text :image
      t.timestamps
    end
  end
end
