User.destroy_all
Pet.destroy_all

lauren = User.create(name: 'Lauren', location: 'Atlanta, GA', image_url: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/43006414_10155430609086222_6011802372890689536_n.jpg?_nc_cat=110&_nc_ht=scontent.fmkc1-1.fna&oh=fc54a7380273c66d3fb6ac8796d6c91f&oe=5C7D5C82')
ben = User.create(name: 'Ben', location: 'Atlanta, GA', image_url: 'https://media.licdn.com/dms/image/C4D03AQEPvFp7uYyGfA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=HSQzAYplTJ5TRj3X7icFv2VKS22jI4S7gI7GnCZK8so')
christina = User.create(name: 'Christina', location: 'Washington D.C.', image_url: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/3166_167354080069035_451122547_n.jpg?_nc_cat=101&_nc_ht=scontent.fmkc1-1.fna&oh=68b0141100eee3b77f542480c744a8b5&oe=5C893355')
david = User.create(name: 'David', location: 'San Francisco, CA', image_url: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/23319205_10156888684779546_6850786053285416451_n.jpg?_nc_cat=106&_nc_ht=scontent.fmkc1-1.fna&oh=8ae61dd52ca73d137fedae30aaccaa6c&oe=5C3D9074')
sam = User.create(name: 'Sam', location: 'Seattle, WA', image_url: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/1935972_103382938431_2027019_n.jpg?_nc_cat=108&_nc_ht=scontent.fmkc1-1.fna&oh=dfadfbd53140298a47c117b5e3cbed11&oe=5C716444')

kato = Pet.create(animal: 'Cat', breed: 'American Short Hair', size: 'Large', sex: 'Male', location: 'Atlanta, GA', age: 'Adult')
minka = Pet.create(animal: 'Cat', breed: 'American Short Hair', size: 'Large', sex: 'Female', location: 'Atlanta, GA', age: 'Adult')
milo = Pet.create(animal: 'Dog', breed: 'Labradoodle', size: 'Large', sex: 'Male', location: 'Seattle, WA', age: 'Elder')

favorite = Favorite.create(user: lauren, pet: minka)
anotherfavorite = Favorite.create(user: ben, pet: minka)
samsfavorite = Favorite.create(user: sam, pet: milo)
