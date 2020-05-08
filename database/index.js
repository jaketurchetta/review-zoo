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
  findRatings: (id, res) => {
    db.query(`SELECT product_id,
                    count(*) AS total_ratings,
                    avg(rating) AS average_rating,
                    sum(case when rating = 0 then 1 else 0 end) AS zero_stars,
                    sum(case when rating = 1 then 1 else 0 end) AS one_stars,
                    sum(case when rating = 2 then 1 else 0 end) AS two_stars,
                    sum(case when rating = 3 then 1 else 0 end) AS three_stars,
                    sum(case when rating = 4 then 1 else 0 end) AS four_stars,
                    sum(case when rating = 5 then 1 else 0 end) AS five_stars
                FROM reviews
                WHERE product_id = ${id}`, genericQueryHandler(res));
  },
  incrementHelpful: (id, res) => {
    db.query(`UPDATE reviews
              SET helpful = helpful + 1
              WHERE id = ${id}`, genericQueryHandler(res));
  }
}