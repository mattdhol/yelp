//model import
const Restaurant = require('../models/yelp')

function index (req, res){
    Restaurant.find({}, function (err, restaurant){
        console.log(restaurant)
        res.render("yelp/index", {restaurant})
    })
}

function addRestaurant(req, res){
    res.render("yelp/addRestaurant")
}

function addFakeData(req, res){
    Restaurant.create({"name" : "Great Food Company", "description" : "test, test"},
    function (err){
        console.log(err)
        res.send("thank you for adding")
    })  
}

function newRestaurant(req, res){
    const restaurant = new Restaurant(req.body)
    restaurant.save(function (err){
        if (err) return res.redirect('/yelp/add');
        res.redirect('/yelp')
    })
}

function show(req, res){
    res.send("test")
}

module.exports = {
    index,
    addRestaurant,
    addFakeData,
    newRestaurant,
    show,
}