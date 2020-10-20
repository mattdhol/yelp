const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    name: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    }
})

const restaurantSchema = new Schema({
    name: String,
    description: String,
    reviews: [reviewSchema]
}) 

module.exports = mongoose.model('restaurant', restaurantSchema)

