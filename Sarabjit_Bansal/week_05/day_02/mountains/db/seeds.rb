# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :place => 'Nepal', :height => 8848
Mountain.create :name => 'K2', :place => 'Pakistan', :height => 4020
Mountain.create :name => 'Kangchenjunga', :place => 'Nepal', :height => 3922
Mountain.create :name => 'Lhotse', :place => 'Nepal', :height => 610
Mountain.create :name => 'Makalu', :place => 'Nepal', :height => 2378
