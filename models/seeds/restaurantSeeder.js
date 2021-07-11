const data = require('../../restaurant.json')
const restaurantList = data.results
const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
mongoose.connect('mongodb://localhost/restaurantData', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('The server is connected to mongoDB!')
    restaurantList.forEach((restaurant) =>
        Restaurant.create({
            id: restaurant.id,
            name: restaurant.name,
            name_en: restaurant.name_en,
            category: restaurant.category,
            image: restaurant.image,
            location: restaurant.location,
            phone: restaurant.phone,
            google_map: restaurant.google_map,
            rating: restaurant.rating,
            description: restaurant.description
        })
    )
    console.log('Success to set the seeder!')
})