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

const OuterRect = styled.rect`
  border-radius: 1px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
  background: linear-gradient(to bottom,#eee,#f6f6f6);
  background-color: #f3f3f3;
  height: 17px;
  width: 100px;
  box-sizing: border-box;
`;

const InnerRect = styled.rect`
  border-radius: 1px;
  background: linear-gradient(to bottom,#ffce00,#ffa700);
  background-color: #ffce00;
  transition: width .5s ease;
  float: left;
  font-size: 0;
  height: 100%;
  box-sizing: border-box;
`;

const TextTD = styled.td`
  color: #0066C0;
  font-size: 13px;
`;

const PercentTD = styled(TextTD)`
  text-align: right;
`;

const SummaryRatings = (props) => {
  const ratings = props.ratings;
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
          <tr>
            <TextTD>5 star </TextTD>
            <td><Meter percent={(ratings.five_stars / ratings.total_ratings)}/></td>
            <TextTD>{Math.round((ratings.five_stars / ratings.total_ratings) * 100)}%</TextTD>
          </tr>
          <tr>
            <TextTD>4 star </TextTD>
            <td><Meter percent={(ratings.four_stars / ratings.total_ratings)}/></td>
            <TextTD>{Math.round((ratings.four_stars / ratings.total_ratings) * 100)}%</TextTD>
          </tr>
          <tr>
            <TextTD>3 star </TextTD>
            <td><Meter percent={(ratings.three_stars / ratings.total_ratings)}/></td>
            <TextTD>{Math.round((ratings.three_stars / ratings.total_ratings) * 100)}%</TextTD>
          </tr>
          <tr>
            <TextTD>2 star </TextTD>
            <td><Meter percent={(ratings.two_stars / ratings.total_ratings)}/></td>
            <TextTD>{Math.round((ratings.two_stars / ratings.total_ratings) * 100)}%</TextTD>
          </tr>
          <tr>
            <TextTD>1 star </TextTD>
            <td><Meter percent={(ratings.one_stars / ratings.total_ratings)}/></td>
            <TextTD>{Math.round((ratings.one_stars / ratings.total_ratings) * 100)}%</TextTD>
          </tr>
        </table>
      </TableDiv>

    </Wrapper>
  )


}

export default SummaryRatings;
