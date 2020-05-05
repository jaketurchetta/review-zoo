import React from 'react';

const SummaryRatings = (props) => {
  const ratings = props.ratings;
  console.log(Array.isArray(ratings));
  console.log(ratings);
  return (
    <div>
      <p>
        Average Rating: {ratings.average_ratings}<br></br>
        Total Rating: {ratings.total_ratings}<br></br>
        Five Stars: {ratings.five_stars}<br></br>
        Four Stars: {ratings.four_stars}<br></br>
        Three Stars: {ratings.three_stars}<br></br>
        Two Stars: {ratings.two_stars}<br></br>
        One Star: {ratings.one_stars}<br></br>
        Zero Stars: {ratings.zero_stars}<br></br>
      </p>
    </div>
  )


}

export default SummaryRatings;
