import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import formatDate from './helpers/dates';
import $ from 'jquery';

// STYLED COMPONENTS

const Wrapper = styled.div`
  font-size: 13px;
  padding: 0px 0px 20px;
`;

const Profile = styled.div`
  margin: 0px 0px 6px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin: 0px 9px 0px 0px;
`;

const RatingSubject = styled.div`
  display: flex;
  align-items: center;
`;

const Subject = styled.div`
  font-weight: bold;
  margin: 0px 0px 0px 2px;
`;

const DateLoc = styled.div`
  color: #555555;
  margin: 3px 0px 0px 0px;
`;

const ReviewSpecs = styled.div`
  margin: 4px 0px 10px;
  display: flex;
  align-items: center;
  color: #555555;
`;

const TextSeparator = styled.i`
  margin: -2px 8.75875px 0px;
  color: #DDDDDD;
`;

const VerifiedPurchase = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #C45500;
`;

const ReviewText = styled.div`
  display: box;
  line-height: 19px;
  padding: 0px 0px 10px;
`;

const HelpfulNumber = styled.div`
  margin: 0px 0px 10px;
  color: #767676;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  color: #555555;
`;

const HelpfulButton = styled.button`
  padding: 7px 28px;
  background-color: #F5F5F5;
  color: black;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 13px;
  border-radius: 3px;
  border: 1px solid #A9A9A9;
`;

const ThankYou = styled.span`
  font-size: 12px;
  color: #007600;
`;

const ShowText = styled.div`
  max-height: 5000px;
`;

const HideText = styled.div`
  max-height: 190px;
  overflow: hidden;
`;

const ReadMore = styled.a`
  color: #0066C0;
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

const ContentFade = styled.div`
  height: 16px;
  top: -16px;
`;

const ReadMoreLess = styled.div`
  color: #0066C0;
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const LinkText = styled.span`
  padding: 0px 0px 0px 5px;
`;

// CLASS COMPONENT

class ProductReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      readMore: false
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
    this.handleReadMoreEnter = this.handleReadMoreEnter.bind(this);
    this.handleReadMoreLeave = this.handleReadMoreLeave.bind(this);
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleEnter(event) {
    event.target.style.background = '#DCDCDC';
    event.target.style.cursor = 'pointer';
  }

  handleLeave(event) {
    event.target.style.background = '#F5F5F5';
    event.target.style.cursor = 'default';
  }

  handleClick(event) {
    this.props.helpfulHandler(this.props.id);
    this.setState({
      clicked: true
    });
  }

  handleReadMoreEnter(event) {
    event.target.style.textDecoration = 'underline';
    event.target.style.color = '#C45500';
    event.target.style.cursor = 'pointer';
  }

  handleReadMoreLeave(event) {
    event.target.style.textDecoration = '';
    event.target.style.color = '#0066C0';
    event.target.style.cursor = 'default';
  }

  handleReadMoreClick() {
    this.setState({
      readMore: !this.state.readMore
    })
  }

  changeHeight() {
    var readmore = $('#readmore');
    if (readmore.text() == 'Read more') {
        readmore.text("Read less");
    } else {
        readmore.text("Read more");
    }

    $('.height').toggleClass("heightAuto");
};

  render() {
    return (
      <Wrapper>

        <Profile>
          <Avatar>
            <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" data-src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" style={{width: 34, height: 34}}></img>
          </Avatar>
          <div>
            {this.props.anonymous === 0 ? (<span>{this.props.name}</span>) : (<span>Amazon User</span>)}
          </div>
        </Profile>

        <RatingSubject>
          <StarRatings
              rating={this.props.rating}
              starRatedColor='#FFCE00'
              numberOfStars={5}
              name='rating'
              starDimension='17px'
              starSpacing='0px'
            />
            <Subject>
              <span> {this.props.subject}</span>
            </Subject>
        </RatingSubject>

        <DateLoc>
          <span>Reviewed in {this.props.location} on {formatDate(this.props.created_date)}</span>
        </DateLoc>

        <ReviewSpecs>
          {this.props.type !== null ? (<div>
                              <span>Type: {this.props.type}</span>
                              <TextSeparator>|</TextSeparator>
                            </div>) : (null)}
          {this.props.size !== null ? (<div>
                              <span>Size: {this.props.size}</span>
                              <TextSeparator>|</TextSeparator>
                            </div>) : (null)}
          {this.props.color !== null ? (<div>
                              <span>Color: {this.props.color}</span>
                              <TextSeparator>|</TextSeparator>
                            </div>) : (null)}
          {this.props.verified === 1 ? (<VerifiedPurchase>Verified Purchase</VerifiedPurchase>) : (null)}
        </ReviewSpecs>

        {this.state.readMore ? (<ReviewText>
                        <ShowText>{this.props.body}</ShowText>
                        <ReadMoreLess><UpArrow></UpArrow><LinkText onMouseEnter={this.handleReadMoreEnter} onMouseLeave={this.handleReadMoreLeave} onClick={this.handleReadMoreClick}>Read less</LinkText></ReadMoreLess>
                      </ReviewText>)
                  : (<ReviewText>
                    <HideText>{this.props.body}</HideText>
                    <ReadMoreLess><DownArrow></DownArrow><LinkText onMouseEnter={this.handleReadMoreEnter} onMouseLeave={this.handleReadMoreLeave} onClick={this.handleReadMoreClick}>Read more</LinkText></ReadMoreLess>
                  </ReviewText>)}

        <div>
          <HelpfulNumber>
            <span>{this.props.helpful} people found this helpful</span>
          </HelpfulNumber>
          <ActionBar>
              {this.state.clicked ? (<ThankYou>✓ Thank you for your feedback.</ThankYou>) : (<HelpfulButton onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>Helpful</HelpfulButton>)}
            <TextSeparator>|</TextSeparator>Comment
            <TextSeparator>|</TextSeparator>Report Abuse
          </ActionBar>
        </div>

      </Wrapper>
    )
  }

}

export default ProductReview;
