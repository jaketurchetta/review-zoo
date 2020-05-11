import React from 'react';
import ProductReview from './ProductReview.jsx';
import _ from 'underscore';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-left: 2.5%;
`;

const KeywordsDiv = styled.div`
  margin: 0px 0px 26px;
`;

const KeywordsHeader = styled.h3`
  font-size: 17px;
  margin: 0px 0px 14px;
  padding: 0px 0px 4px;
`;

const StyledLi = styled.li`
  margin: 0px 0px 10px;
`;

const Dropbtn = styled.div`
  padding: 4px 65px 4px 4px;
  background-color: #F5F5F5;
  color: black;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 11px;
  border-radius: 3px;
  border: 1px solid #A9A9A9;
  display: flex;
`;

const DropDownContent = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
`;

const SubA = styled.a`
  color: black;
  padding: 2px 12px 1px 13px;
  margin: 0px 0px 1px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size 13px;
  &:hover {
    background-color: #F5F5F5;
  }
`;

const DownArrow = styled.i`
  border: solid #555555;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
`;

const UpArrow = styled.i`
  border: solid #555555;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(225deg);
`;

const FilterArrow = styled.i`
  border: solid #555555;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  left-margin: 20px;
  display: flex;
  align-items: flex-end;
`;

class ProductReviewsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterClicked: false
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.handleListClick = this.handleListClick.bind(this);
  }

  handleEnter(event) {
    event.target.style.background = '#DCDCDC';
    event.target.style.cursor = 'pointer';
  }

  handleLeave(event) {
    event.target.style.background = '#F5F5F5';
    event.target.style.cursor = 'default';
  }

  handleButtonClick() {
    console.log('clicked')
    this.setState({
      filterClicked: !this.state.filterClicked
    })
  }

  // handleSelection filters the page based on the selection

  render() {
    return (
      <Wrapper>

        <KeywordsDiv>
          <KeywordsHeader>Read reviews that mention</KeywordsHeader>
        </KeywordsDiv>

        <DropDownLi>
          <Dropbtn onClick={this.handleButtonClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{this.props.filter}<FilterArrow></FilterArrow></Dropbtn>
          {this.state.filterClicked ? (<DropDownContent>
                                          <SubA onClick={this.props.handleSelection('Top Reviews')}>Top Reviews</SubA>
                                          <SubA onClick={this.props.handleSelection('Most Recent')}>Most Recent</SubA>
                                        </DropDownContent>)
                          : (null)}
        </DropDownLi>

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