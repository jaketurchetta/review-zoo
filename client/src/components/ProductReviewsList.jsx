import React from 'react';
import ProductReview from './ProductReview.jsx';
import _ from 'underscore';

const ProductReviewsList = (props) => {
  return (
    <div>
      <div>
        <h4 className="keywords-header">Read Reviews that mention</h4>
        {/* add keywords filter boxes here */}
      </div>
      <div className="main-content">
        {_.map(props.reviews, (review) =>
        <ProductReview
          key={review.id}
          name={review.username}
          rating={review.rating}
          subject={review.subject}
          location={review.user_location}
          created_date={review.created_date}
          anonymous={review.user_anonymous}
          size={review.product_size}
          color={review.product_color}
          type={review.product_type}
          body={review.body}
          helpful={review.helpful} />)}
      </div>
    </div>
  )
};

export default ProductReviewsList;