import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Snapshot tests', () => {
  it('colorpicker snapshot', () => {
    const wrapper = shallow(<ColorPicker colors={['red', 'blue', 'green']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
