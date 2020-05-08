import React from 'react';
import ProductReview from './ProductReview.jsx';
import _ from 'underscore';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const KeywordsDiv = styled.div`
  margin: 0px 0px 26px;
`;

const KeywordsHeader = styled.h3`
  font-size: 17px;
  margin: 0px 0px 14px;
  padding: 0px 0px 4px;
`;

const DropdownDiv = styled.div`
  margin: 0px 0px 10px;
`;

const DropdownButton = styled.button`
  padding: 4px 65px 4px 4px;
  background-color: #F5F5F5;
  color: black;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 11px;
  border-radius: 3px;
  border: 1px solid #A9A9A9;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

class ProductReviewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdown: 'Top Reviews'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event)
  }

  render() {
    return (
      <Wrapper>

        <KeywordsDiv>
          <KeywordsHeader>Read reviews that mention</KeywordsHeader>
        </KeywordsDiv>

        <DropdownDiv>
          <DropdownButton onClick={this.handleClick}>{this.state.dropdown}</DropdownButton>
          <DropdownContent>
            <ul>Top Reviews</ul>
            <ul>Most Recent</ul>
          </DropdownContent>
        </DropdownDiv>

        <div>
          {_.map(this.props.reviews, (review) =>
          <ProductReview
            key={review.id}
            id={review.id}
            name={review.username}
            rating={review.rating}
            subject={review.subject}
            location={review.user_location}
            created_date={review.created_date}
            anonymous={review.user_anonymous}
            size={review.product_size}
            color={review.product_color}
            type={review.product_type}
            verified={review.verified_purchase}
            body={review.body}
            helpful={review.helpful}
            helpfulHandler={this.props.helpfulHandler}/>)}
        </div>
      </Wrapper>
    )
  }

}

export default ProductReviewsList;