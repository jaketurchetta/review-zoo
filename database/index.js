var mysql = require('mysql');
var mysqlConfig = require('./config.js');
const {genericQueryHandler} = require('./handlers.js');

var db = mysql.createConnection(mysqlConfig);


module.exports = {
  findReviews: (id, res) => {
    db.query(`SELECT a.id as id,
                     a.rating as rating,
                     a.subject as subject,
                     a.body as body,
                     a.created_date as created_date,
                     a.verified_purchase as verified_purchase,
                     a.helpful as helpful,
                     a.user_id as user_id,
                     a.product_id as product_id,
                     b.name as username,
                     b.location as user_location,
                     b.anonymous as user_anonymous,
                     c.size as product_size,
                     c.color as product_color,
                     c.type as product_type
                FROM reviews as a
                LEFT JOIN users as b ON a.user_id = b.id
                LEFT JOIN products as c ON a.product_id = c.id
                WHERE product_id = ${id}
                LIMIT 10`, genericQueryHandler(res));
  },
  findReviewImages: (id, res) => {
    db.query(`SELECT * FROM images WHERE review_id = ${id}`, genericQueryHandler(res));
  }
}