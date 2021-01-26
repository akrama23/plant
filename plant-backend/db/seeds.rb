# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Plant.destroy_all
User.destroy_all
Favorite.destroy_all
Comment.destroy_all

Plant.create(name: "Bonsai", sun: "direct sunlight", water:"Once a week, immerse entire plant in water until air bubbles have risen to the top.", image: "https://static.toiimg.com/thumb/resizemode-4,width-400,msid-73803862/73803862.jpg")
Plant.create(name: "Pothos", sun: "indirect sunlight", water:"Water every 1-2 weeks, allowing the top half of the soil is dry.", image: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Terracotta-Pot-6_Pothos-Jade-6.jpg?v=1544979630")
Plant.create(name: "Aloe", sun: "direct sunlight", water:"Water every 2-3 weeks allowing the soil to dry.", image: "https://s7d1.scene7.com/is/image/terrain/53770426_000_a?$zoom2$")
Plant.create(name: "Mother-in-law’s Tongue", sun:"indirect sunlight", water:"Water once every 10 days, allowing soil to dry completely.", image: "https://bouqs.com/product_images/snake/Deluxe/5dbc65cbf92ea13a2092935d/detail.jpg?c=1572627915")
Plant.create(name: "ZZ Plant", sun:"indirect sunlight", water:"Water every 1-2 weeks, allowing the soil to dry.", image:"https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_hyde_blush_1200x.jpg?v=1610756176")
Plant.create(name: "Wandering Jew", sun:"indirect sunlight", water:"Water every 1-2 weeks, allowing the top half of the soil to dry.", image:"https://images.homedepot-static.com/productImages/19dd560b-4823-4c78-b74d-f257c5d61e34/svn/nearly-natural-artificial-plants-8372-64_1000.jpg")

User.create(name: "Akram")
User.create(name: "Meredith")
User.create(name: "Chris")
User.create(name: "Irena")
User.create(name: "Dane")
User.create(name: "Adam")

Favorite.create(plant: Plant.all.sample, user: User.all.sample)
Favorite.create(plant: Plant.all.sample, user: User.all.sample)
Favorite.create(plant: Plant.all.sample, user: User.all.sample)
Favorite.create(plant: Plant.all.sample, user: User.all.sample)
Favorite.create(plant: Plant.all.sample, user: User.all.sample)

Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)
Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)
Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)
Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)
Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)
Comment.create(plant: Plant.all.sample, user: User.all.sample, comment: Faker::TvShows::FamilyGuy.quote)