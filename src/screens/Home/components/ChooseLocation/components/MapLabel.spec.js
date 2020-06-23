import React from 'react';
import { shallow } from 'enzyme'
import MapLabel, { StyledButton, StyledHr } from './MapLabel';

let wrapper

describe('Component > MapLabel', function () {
  const onActivateSpy = jest.fn()
  const mapImage = 'image.png'

  beforeEach(function () {
    wrapper = shallow(
      <MapLabel
        location='Baja, California'
        map={mapImage}
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
        wrapper.find(StyledButton).first().simulate('mouseenter')
        expect(onActivateSpy).toHaveBeenCalledWith(mapImage)
        expect(wrapper.find(StyledHr).length).toBe(1)
      })
    })

    describe('onMouseLeave', function () {
      it('should trigger onHover and onActivate', function () {
        wrapper.find(StyledButton).first().simulate('mouseleave')
        expect(onActivateSpy).toHaveBeenCalledWith(null)
        expect(wrapper.find(StyledHr).length).toBe(0)
      })
    })
  })
})
