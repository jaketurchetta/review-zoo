import React from 'react'
import {mount, shallow} from 'enzyme'
import ProductReview from '../client/src/components/ProductReview.jsx'

describe('ProductReview', () => {
  it('ProductReview should exist', () => {
    const wrapper = shallow(<ProductReview />);
    expect(wrapper).toExist();
  });
})