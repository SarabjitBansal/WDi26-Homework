# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Movie.create(:name => 'Inside Out', :year => '2015', :language => 'English',  :image => 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-TUI21983WDSHE-Full-Image_GalleryBackground-en-US-1488573399474._RI_SX940_.jpg')
Movie.create(:name => 'Zootopia', :year => '2016', :language => 'English',  :image => 'https://lumiere-a.akamaihd.net/v1/images/rich_zootopia_header_3d918aae.jpeg?region=0,0,2048,1200')
Movie.create(:name => 'Paddington', :year => '2014', :language => 'English',  :image => 'http://is3.mzstatic.com/image/thumb/Video118/v4/f7/9d/2d/f79d2d68-80ee-9313-1970-e414230f6609/source/1200x630bb.jpg')




Director.destroy_all
Director.create(:name => 'Paul Thomas King', :dob => '1978', :nationality => 'British', :image => 'http://i1.wp.com/www.heyuguys.com/images/2014/11/Paul-King-A.00_07_53_04.Still003.jpg?resize=1920%2C1080')
Director.create(:name => 'Byron Howard', :dob => '1968', :nationality => 'American', :image => 'https://www.toonzone.net/wp-content/uploads/2016/06/ByronHowardD232013.jpg')
Director.create(:name => 'Pete Docter', :dob => '1988', :nationality => 'American', :image => 'https://ohmy.disney.com/wp-content/uploads/2015/04/Pete-Docter-2015.jpg')
