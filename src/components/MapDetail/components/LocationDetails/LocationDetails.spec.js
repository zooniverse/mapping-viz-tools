import React from 'react';
import { shallow } from 'enzyme'
import LocationDetails from './LocationDetails';

test('renders without crashing', () => {
  const wrapper = shallow(<LocationDetails />);
  expect(wrapper).toBeDefined()
});
