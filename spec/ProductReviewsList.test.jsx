import React from 'react'
import {mount, shallow} from 'enzyme'
import ProductReviewsList from '../client/src/components/ProductReviewsList.jsx'

describe('ProductReviewsList', () => {
  it('ProductReviewsList should exist', () => {
    const wrapper = shallow(<ProductReviewsList />);
    expect(wrapper).toExist();
  });
})