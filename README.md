# Review Zoo

This project is an example of a typical customer reviews module for a retail product on an ecommerce website. Functionality includes customer ratings and reviews, review filtering (recent/top), average reviews, and various animations.

> The app is built with React and React Styled Components on the front-end and Express and MySQL on the backend. The microservice was deployed using Docker and AWS EC2.

- [Customer Reviews YouTube Demo](https://youtu.be/HAUF0t5K02k)

![alt text](client/assets/ReviewZooImage.png?raw=true)

## Getting Started

Before starting, please have MySQL 5.7 installed. Edit the config.js file in the database directory, using your user / password credentials:

```
module.exports.mysqlConfig = {
  host: 'localhost',
  user: 'YourUsername',
  password: 'YourPassword',
  database: 'ReviewZoo'
};
```

Download dependencies:

```
npm install
```

Seed the database:

```
npm run seed
```

>*Note: if you have a password associated with you MySQL username you will have to edit the seed script in the package.json to include password prompting.*
*It should look something like this:*
```
mysql -u root -p < schema.sql
```

Run webpack build:

```
npm run webpack
```

Start the server:

```
npm start
```

## Development

Start development server:

```
npm run server-dev
```

Start watching webpack build to compile as changes are made:

```
npm run react-dev
```

Run tests:

```
npm test
```

## Requirements

- Node
- MySQL

## Related Projects

- https://github.com/hackreactor5group/video-carousel
