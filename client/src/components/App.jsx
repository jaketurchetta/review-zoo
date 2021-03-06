import React from 'react';
import axios from 'axios';
import {Promise} from 'bluebird';
import ProductReviewsList from './ProductReviewsList.jsx';
import SummaryRatings from './SummaryRatings.jsx';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: 'Amazon Ember', Arial, sans-serif;
  display: flex;
  color: #111111;
`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_id: 6,
      reviews: [],
      ratings: [],
      filter: 'Top Reviews',
      filterClicked: false
    };

    this.getReviews = this.getReviews.bind(this);
    this.setReviews = this.setReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
    this.refreshReviews = this.refreshReviews.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
    this.selectDropdown = this.selectDropdown.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  // LIFECYCLE METHODS
  componentDidMount() {
    let fetches = [
      this.getRatings(this.state.product_id),
      this.getReviews(this.state.product_id)
    ]
    Promise.all(fetches).then((values) => {
       this.setState({
        ratings: values[0].data[0],
        reviews: values[1].data
      })
     })
  }

  // SETTERS
  setReviews({data}) {
    this.setState({reviews: data});
  }

  // ERROR HANDLING
  handleError(error) {
    console.log(error)
  }

  // HTTP REQUESTS - FOR COMPONENT DID MOUNT
  getReviews(productid) {
    if (this.state.filter === 'Top Reviews') {
      return axios.get(`/products/${productid}/topreviews`)
                  .catch(this.handleError)
    } else if (this.state.filter === 'Most Recent') {
      return axios.get(`/products/${productid}/recentreviews`)
                  .catch(this.handleError)
    }
  }

  getRatings(productid) {
    return axios.get(`/products/${productid}/ratings`)
                .catch(this.handleError)
  }

  // HTTP REQUESTS - OTHER
  refreshReviews(productid) {
    if (this.state.filter === 'Top Reviews') {
      axios.get(`/products/${productid}/topreviews`)
        .then(this.setReviews)
        .catch(this.handleError)
    } else if (this.state.filter === 'Most Recent') {
      axios.get(`/products/${productid}/recentreviews`)
        .then(this.setReviews)
        .catch(this.handleError)
    }
  }

  incrementHelpful(reviewid) {
    axios.put(`/products/${this.state.product_id}/reviews/${reviewid}`)
      .then(this.refreshReviews(this.state.product_id))
      .catch(this.handleError)
  }

  handleButtonClick() {
    this.setState({
      filterClicked: true
    })
  }

  selectDropdown(selection) {
    if (selection === 'Top Reviews') {
      axios.get(`/products/${this.state.product_id}/topreviews`)
        .then((response) => {
          this.setState({
            reviews: response.data,
            filter: 'Top Reviews',
            filterClicked: false
          })
        })
        .catch(this.handleError)
    } else if (selection === 'Most Recent') {
      axios.get(`/products/${this.state.product_id}/recentreviews`)
        .then((response) => {
          this.setState({
            reviews: response.data,
            filter: 'Most Recent',
            filterClicked: false
          })
        })
        .catch(this.handleError)
    }
  }

  // RENDER MODULE
  render() {
    return (
      <AppWrapper>
        <SummaryRatings ratings={this.state.ratings} />
        <ProductReviewsList
          productid={this.state.product_id}
          reviews={this.state.reviews}
          helpfulHandler={this.incrementHelpful}
          filter={this.state.filter}
          filterClicked={this.state.filterClicked}
          handleButtonClick={this.handleButtonClick}
          handleSelection={this.selectDropdown}/>
      </AppWrapper>
    )
  }

}

export default App;
