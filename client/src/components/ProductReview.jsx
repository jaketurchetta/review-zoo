import React from 'react';

const ProductReview = ({ name, rating, subject, location, created_date, anonymous, size, color, type, body, helpful }) => {
  return (
    <li>
      <span> {name} </span>
      <span> {rating} </span>
      <span> {subject} </span>
      <span> {location} </span>
      <span> {created_date} </span>
      <span> {size} </span>
      <span> {color} </span>
      <span> {type} </span>
      <span> {body} </span>
      <span> {helpful} </span>
    </li>
  )
}


export default ProductReview;