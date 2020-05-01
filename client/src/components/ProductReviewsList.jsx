import React from 'react';
import _ from 'underscore';

const ProductReviewsList = (props) => {
  return (
    <div>
      <div>
        <h3 className="main-header">Customer Reviews</h3>
        {/* add average ratings, counts, animations here */}
      </div>
      <div>
        <h4 className="keywords-header">Read Reviews that mention</h4>
        {/* add keywords filter boxes here */}
      </div>
      <div className="main-content">
        {_.map(props.reviews, (review) =>
        <ProductReview
          key={review.id}
          name={review.name}
          rating={review.rating}
          owner={review.login}
          html_url={review.html_url}
          description={review.description} />)}
      </div>
    </div>
  )
};

export.modules.ProductReviewsList = ProductReviewsList;