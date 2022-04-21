import React from 'react';
import { shallow } from 'enzyme'
import LocationDetails from './LocationDetails';

test('renders without crashing', () => {
  const wrapper = shallow(<LocationDetails />);
  expect(wrapper).toBeDefined()
});

// describe('map area details', () => {
//   it('should display map center coordinates', () => {
//     const expectedDisplay = `-51°70'S -60°10'W`
//     const centerCoords = wrapper.find(Uppercase).at(1)
//     const inner = centerCoords.find('span')
//     expect(inner.text()).toEqual(expectedDisplay)
//   })

//   it('should display map area measurement', () => {
//     const expectedDisplay = `3451 SQ MI / 5554 SQ KM`
//     const mapArea = wrapper.find(Uppercase).at(2)
//     const inner = mapArea.find('span')
//     expect(inner.text()).toEqual(expectedDisplay)
//   })
// })