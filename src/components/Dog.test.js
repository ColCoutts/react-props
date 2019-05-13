import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('creating test snapshot', () => {
  it('dog snapshot', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
