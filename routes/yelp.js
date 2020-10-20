var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/yelp')

/* GET home page. */
router.get('/', yelpCtrl.index)

router.get('/add', yelpCtrl.addRestaurant)

router.post('/', yelpCtrl.newRestaurant)

router.get('/testdata', yelpCtrl.addFakeData)

router.get('/restaurant-detail', yelpCtrl.show)


module.exports = router;