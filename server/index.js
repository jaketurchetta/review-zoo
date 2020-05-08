var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

// INVOKE EXPRESS
var app = express();

// DECLARE PORT
const PORT = 2626;

// LISTEN
app.listen(PORT, console.log('Listening on PORT: ', PORT));

// INITIATE MIDDLEWARE
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( express.static(__dirname + '/../client/dist') );

// GET REVIEWS
app.get('/products/:productid/reviews', (req, res) => {
  db.findReviews(req.params.productid, res);
})

// GET RATINGS
app.get('/products/:productid/ratings', (req, res) => {
  db.findRatings(req.params.productid, res);
})

// ADD TO HELPFUL
app.put('/products/:productid/reviews/:reviewid', (req, res) => {
  db.incrementHelpful(req.params.reviewid, res);
})