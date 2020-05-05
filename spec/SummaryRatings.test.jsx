import React from 'react'
import {mount, shallow} from 'enzyme'
import SummaryRatings from '../client/src/components/SummaryRatings.jsx'

describe('SummaryRatings', () => {
  it('SummaryRatings should exist', () => {
    const wrapper = shallow(<SummaryRatings />);
    expect(wrapper).toExist();
  });
})