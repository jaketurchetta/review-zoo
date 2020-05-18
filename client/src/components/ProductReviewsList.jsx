import React from 'react';
import ProductReview from './ProductReview.jsx';
import _ from 'underscore';
import styled from 'styled-components';

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

const DropDownLi = styled.div`
  margin: 0px 0px 10px;
  display: inline-block;
`;

const Dropbtn = styled.div`
  padding: 4px 4px 4px 4px;
  background-color: #F5F5F5;
  color: black;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 11px;
  border-radius: 3px;
  border: 1px solid #A9A9A9;
  display: flex;
  align-items: center;
`;

const DropDownContent = styled.div`
  position: absolute;
  border: 1px solid #A9A9A9;
  border-radius: 2px;
  background-color: #FFFFFF;
  height: auto;
  min-width: 136px;
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow-y: auto;
  padding: 8px 0px;
`;

const SubA = styled.div`
  color: black;
  padding: 2px 12px 1px 13px;
  margin: 0px 0px 1px;
  text-decoration: none;
  outline: 0;
  border: 1px solid transparent;
  margin-left: 1px;
  display: block;
  text-align: left;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size 13px;
  &:hover {
    background-color: #F5F5F5;
    border-color: #e7e7e7;
    border-top-color: #e7e7e7;
    border-left-color: #e77600;
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
  border-width: 0 2px 2px 0;
  vertical-align: middle;
  display: flex;
  justify-content: flex-end;
  padding: 3px;
  transform: rotate(45deg);
`;

const FilterSpan = styled.span`
  padding-right: 50px;
`;

const ButtonDiv = styled.div``;

class ProductReviewsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(event) {
    event.target.style.background = '#DCDCDC';
    event.target.style.cursor = 'pointer';
  }

  handleLeave(event) {
    event.target.style.background = '#F5F5F5';
    event.target.style.cursor = 'default';
  }

  render() {
    return (
      <Wrapper>

        <KeywordsDiv>
          <KeywordsHeader>Read reviews that mention</KeywordsHeader>
        </KeywordsDiv>

        <DropDownLi>
          <ButtonDiv onClick={() => this.props.handleButtonClick()} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
            <Dropbtn><FilterSpan>{this.props.filter}</FilterSpan><FilterArrow></FilterArrow></Dropbtn>
          </ButtonDiv>
          {this.props.filterClicked ? (<DropDownContent>
                                          <SubA onClick={() => this.props.handleSelection('Top Reviews')}>Top Reviews</SubA>
                                          <SubA onClick={() => this.props.handleSelection('Most Recent')}>Most Recent</SubA>
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