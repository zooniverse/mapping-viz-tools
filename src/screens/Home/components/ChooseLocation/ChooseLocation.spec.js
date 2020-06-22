import React from 'react';
import { shallow } from 'enzyme'
import ResponsiveImage from 'components/ResponsiveImage'
import { ChooseLocation } from './ChooseLocation';
import MapLabel from './components/MapLabel'

describe('Component > ChooseLocation', function () {
  let wrapper

  beforeEach(function () {
    wrapper = shallow(<ChooseLocation />);
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  });

  describe('when activating a label', function () {
    it('should show a map image', function () {
      const label = wrapper.find(MapLabel).first()
      label.props().onActivate('test.png')
      wrapper.update()
      const images = wrapper.find(ResponsiveImage)
      expect(images.length).toBe(1)
    })
  })
})
