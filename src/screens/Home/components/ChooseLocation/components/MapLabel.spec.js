import React from 'react';
import { shallow } from 'enzyme'
import MapLabel, { StyledAnchor, StyledHr } from './MapLabel';

let wrapper

describe('Component > MapLabel', function () {
  const onActivateSpy = jest.fn()
  const location = {
    label: 'Baja, California',
    map: 'image.png'
  }

  beforeEach(function () {
    wrapper = shallow(
      <MapLabel
        location={location}
        onActivate={onActivateSpy}
      />);
  })

  afterEach(() => jest.clearAllMocks());

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  });

  describe('Events > MapLabel', function () {
    describe('onMouseEnter', function () {
      it('should trigger onHover and onActivate', function () {
        wrapper.find(StyledAnchor).first().simulate('mouseenter')
        expect(onActivateSpy).toHaveBeenCalledWith(location)
        expect(wrapper.find(StyledHr).length).toBe(1)
      })
    })

    describe('onMouseLeave', function () {
      it('should trigger onHover and onActivate', function () {
        wrapper.find(StyledAnchor).first().simulate('mouseleave')
        expect(onActivateSpy).toHaveBeenCalledWith(null)
        expect(wrapper.find(StyledHr).length).toBe(0)
      })
    })
  })
})
