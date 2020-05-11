import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import Meter from './MeterBar.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 21px;
  margin: 0px 0px;
  width: 300px;
`;

const Totals = styled.div`
  padding: 6px 0px 0px;
  width 300px;
`;

const StarsContainer = styled.div`
  display: flex;
`;

const StarsDiv = styled.div`
  margin: 0px 10px 0px 0px;
`;

const AverageStars = styled.span`
  font-size: 17px;
`;

const TotalRatingCount = styled.div`
  margin: 15px 0px 18px;
  color: #555555;
  font-size: 13px;
  width: 300px;
`;

const TableDiv = styled.div`

`;

const TextTD = styled.td`
  color: #0066C0;
  font-size: 13px;
`;

const PercentTD = styled(TextTD)`
  text-align: right;
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

const HowAmazonCalculates = styled.div`
  color: #0066C0;
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const LinkText = styled.span`
  padding: 0px 0px 0px 5px;
`;

const InfoDiv = styled.div`
  font-size: 13px;
  margin: 4px 0px 0px;
  padding: 0px 0px 0px 11px;
`;

const ByFeatureMargin = styled.div`
  margin: 0px 0px 18px
`;

const ByFeatureTitle = styled.span`
  font-size: 17px;
  font-weight: bold;
`;

const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FeatureRow = styled.div`
  vertical-align: middle;
  margin-bottom: 14px;
  display: flex;
  justify-content: stretch;
`;

const FeatureSpan = styled.div`
  font-size: 13px;
  width: 171px;
  color: #111111
  display: flex;
  justify-content: flex-start;
`;

const JustifyRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReviewHeader = styled.h3`
  font-size: 17px;
  margin: 0px 0px 4px;
  padding: 0px 0px 4px;
`;

const ShareThoughts = styled.div`
  font-size: 13px;
  margin: 0px 0px 18px;
`;

const WriteReviewButton = styled.button`
  padding: 7px 28px;
  background-color: #F5F5F5;
  color: black;
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 13px;
  border-radius: 3px;
  border: 1px solid #A9A9A9;
`;

const FeatureNumberSpan = styled.span`
  color: #767676;
  font-size: 13px;
  padding-left 4px;
`;


class SummaryRatings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      infoExpand: false,
      featuresExpand: false
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
    this.handleFeatureClick = this.handleFeatureClick.bind(this);
    this.handleButtonEnter = this.handleButtonEnter.bind(this);
    this.handleButtonLeave = this.handleButtonLeave.bind(this);

  }

  handleEnter(event) {
    event.target.style.textDecoration = 'underline';
    event.target.style.color = '#C45500';
    event.target.style.cursor = 'pointer';
  }

  handleLeave(event) {
    event.target.style.textDecoration = '';
    event.target.style.color = '#0066C0';
    event.target.style.cursor = 'default';
  }

  handleButtonEnter(event) {
    event.target.style.background = '#DCDCDC';
    event.target.style.cursor = 'pointer';
  }

  handleButtonLeave(event) {
    event.target.style.background = '#F5F5F5';
    event.target.style.cursor = 'default';
  }

  handleInfoClick() {
    this.setState({
      infoExpand: !this.state.infoExpand
    })
  }

  handleFeatureClick() {
    this.setState({
      featuresExpand: !this.state.featuresExpand
    })
  }

  render() {
    const ratings = this.props.ratings;
    return (
      <Wrapper>

        <Title>Customer reviews</Title>

        <Totals>
          <StarsContainer>
            <StarsDiv>
                <StarRatings
                  rating={ratings.average_rating}
                  starRatedColor='#FFCE00'
                  numberOfStars={5}
                  name='rating'
                  starDimension='19px'
                  starSpacing='0px'
                />
              </StarsDiv>
              <AverageStars>{Math.round(10 * ratings.average_rating) / 10} out of 5</AverageStars>
          </StarsContainer>
            <TotalRatingCount>{ratings.total_ratings} customer ratings</TotalRatingCount>
        </Totals>

        <TableDiv>
          <table>
            <tbody>
              <tr>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>5 star </TextTD>
                <td><Meter percent={(ratings.five_stars / ratings.total_ratings)}/></td>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{Math.round((ratings.five_stars / ratings.total_ratings) * 100)}%</TextTD>
              </tr>
              <tr>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>4 star </TextTD>
                <td><Meter percent={(ratings.four_stars / ratings.total_ratings)}/></td>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{Math.round((ratings.four_stars / ratings.total_ratings) * 100)}%</TextTD>
              </tr>
              <tr>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>3 star </TextTD>
                <td><Meter percent={(ratings.three_stars / ratings.total_ratings)}/></td>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{Math.round((ratings.three_stars / ratings.total_ratings) * 100)}%</TextTD>
              </tr>
              <tr>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>2 star </TextTD>
                <td><Meter percent={(ratings.two_stars / ratings.total_ratings)}/></td>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{Math.round((ratings.two_stars / ratings.total_ratings) * 100)}%</TextTD>
              </tr>
              <tr>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>1 star </TextTD>
                <td><Meter percent={(ratings.one_stars / ratings.total_ratings)}/></td>
                <TextTD onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>{Math.round((ratings.one_stars / ratings.total_ratings) * 100)}%</TextTD>
              </tr>
            </tbody>
          </table>
        </TableDiv>


        <HowAmazonCalculates>
          {this.state.infoExpand ? (<UpArrow></UpArrow>) : (<DownArrow></DownArrow>)}<LinkText onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={this.handleInfoClick}>How does Amazon calculate star ratings?</LinkText>
        </HowAmazonCalculates>
        {this.state.infoExpand ? (<InfoDiv>Amazon calculates a product’s star ratings based on a machine learned model instead of a raw data average. The model takes into account factors including the age of a rating, whether the ratings are from verified purchasers, and factors that establish reviewer trustworthiness.</InfoDiv>) : (null)}

        <hr style={{width: '300px', borderColor: '#CCCCCC', margin: '22px 0px', borderTop: '1px'}}></hr>

        <ByFeatureMargin>
          <ByFeatureTitle>By feature</ByFeatureTitle>
        </ByFeatureMargin>

        <FeaturesDiv>
          <FeatureRow>
            <FeatureSpan>Aliquid rem</FeatureSpan>
              <JustifyRight>
                <StarRatings
                      rating={4.7}
                      starRatedColor='#FFCE00'
                      numberOfStars={5}
                      name='rating'
                      starDimension='17px'
                      starSpacing='0px'
                    />
                <FeatureNumberSpan>4.7</FeatureNumberSpan>
              </JustifyRight>
          </FeatureRow>
          <FeatureRow>
            <FeatureSpan>Quae deleniti ut</FeatureSpan>
            <StarRatings
                  rating={4.5}
                  starRatedColor='#FFCE00'
                  numberOfStars={5}
                  name='rating'
                  starDimension='17px'
                  starSpacing='0px'
                />
            <FeatureNumberSpan>4.5</FeatureNumberSpan>
          </FeatureRow>
          <FeatureRow>
            <FeatureSpan>Consequatur ame</FeatureSpan>
            <StarRatings
                  rating={4.4}
                  starRatedColor='#FFCE00'
                  numberOfStars={5}
                  name='rating'
                  starDimension='17px'
                  starSpacing='0px'
                />
            <FeatureNumberSpan>4.4</FeatureNumberSpan>
          </FeatureRow>
          {this.state.featuresExpand ? (<div>
                                          <FeatureRow>
                                            <FeatureSpan>Omnis non minima</FeatureSpan>
                                            <StarRatings
                                                  rating={4.3}
                                                  starRatedColor='#FFCE00'
                                                  numberOfStars={5}
                                                  name='rating'
                                                  starDimension='17px'
                                                  starSpacing='0px'
                                                />
                                            <FeatureNumberSpan>4.3</FeatureNumberSpan>
                                          </FeatureRow>
                                          <HowAmazonCalculates>
                                            <UpArrow></UpArrow><LinkText onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={this.handleFeatureClick}>See less</LinkText>
                                          </HowAmazonCalculates>
                                        </div>)
                                    : (<HowAmazonCalculates>
                                        <DownArrow></DownArrow><LinkText onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={this.handleFeatureClick}>See more</LinkText>
                                      </HowAmazonCalculates>)}
          </FeaturesDiv>

          <hr style={{width: '300px', borderColor: '#CCCCCC', margin: '22px 0px', borderTop: '1px'}}></hr>

          <ReviewHeader>
            Review this product
          </ReviewHeader>
          <ShareThoughts>
            Share your thoughts with other customers
          </ShareThoughts>
          <WriteReviewButton onMouseEnter={this.handleButtonEnter} onMouseLeave={this.handleButtonLeave}>
            Write a customer review
          </WriteReviewButton>

          <hr style={{width: '300px', borderColor: '#CCCCCC', margin: '22px 0px', borderTop: '1px'}}></hr>

      </Wrapper>
    )
  }
}

export default SummaryRatings;
