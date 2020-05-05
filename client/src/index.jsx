import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Promise} from 'bluebird';
import ProductReviewsList from './components/ProductReviewsList.jsx';
import SummaryRatings from './components/SummaryRatings.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: '',
      product_id: 10,
      reviews: [],
      ratings: []
    };

    this.getReviews = this.getReviews.bind(this);
    this.setReviews = this.setReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
    this.setRatings = this.setRatings.bind(this);

  }

  // LIFECYCLE METHODS
  componentDidMount() {
    Promise.all([
      this.getRatings(this.state.product_id),
      this.getReviews(this.state.product_id)
    ]).then(([res1, res2]) => {
      Promise.all([res1.json(), res2.json()])
    }).then(([data1, data2]) => {
      this.setState({
        ratings: data1,
        reviews: data2
      })
    })
  }

  // SETTERS
  setReviews({data}) {
    this.setState({reviews: data});
  }

  setRatings({data}) {
    this.setState({ratings: data});
  }

  // ERROR HANDLING
  handleError(error) {
    console.log(error)
  }

  // GET REQUESTS
  getReviews(productid) {
    axios.get(`/products/${productid}/reviews`)
  }

  getRatings(productid) {
    axios.get(`/products/${productid}/ratings`)
  }

  // RENDER MODULE
  render() {
    // console.log(this.state.ratings)
    // console.log(this.state.reviews)
    return (
      <div>

        <div>
          <h3 className="summary">Customer Reviews</h3>
          <SummaryRatings ratings={this.state.ratings} />
        </div>
        <div className="main">
          <ProductReviewsList reviews={this.state.reviews} />
        </div>

      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('reviews'))