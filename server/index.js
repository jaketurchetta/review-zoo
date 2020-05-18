var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var morgan = require('morgan');
var cors = require('cors');

// INVOKE EXPRESS
var app = express();

// DECLARE PORT
const PORT = 3001;

// LISTEN
app.listen(PORT, console.log('Listening on PORT: ', PORT));

// INITIATE MIDDLEWARE
app.use( morgan('dev') )
app.use(f(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( express.static(__dirname + '/../client/dist') );

// GET REVIEWS
app.get('/products/:productid/topreviews', (req, res) => {
  db.findTopReviews(req.params.productid, res);
})

app.get('/products/:productid/recentreviews', (req, res) => {
  db.findRecentReviews(req.params.productid, res);
})

// GET RATINGS
app.get('/products/:productid/ratings', (req, res) => {
  db.findRatings(req.params.productid, res);
})

// ADD TO HELPFUL
app.put('/products/:productid/reviews/:reviewid', (req, res) => {
  db.incrementHelpful(req.params.reviewid, res);
})
