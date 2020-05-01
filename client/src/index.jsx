import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  // SETTERS
  setReviews({data}) {
    this.setState({reviews: data});
  }

  // ERROR HANDLING
  handleError(error) {
    console.log(error)
  }

  // GET REQUESTS
  getReviews(productid) {
    axios.get(`/products/${productid}/reviews`)
      n.then(this.getImages)
      .catch(this.handleError)
  }

  getImages(productid, reviewid) {
    axios.get(`/products/${productid}/reviews/${reviewid}`)
      .then(this.setReviews)
      .catch(this.handleError)
  }

  render() {
    return (
      <div>

        <div className="main">
          React will render here!
          <ProductReviews />
        </div>

      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('reviews'))