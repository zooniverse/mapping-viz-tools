import React from 'react'
import { mount } from 'enzyme'
import MapLabel, { StyledAnchor, StyledImage } from './MapLabel'

let wrapper

describe('Component > MapLabel', function () {
  const location = {
    label: 'Baja, California',
    map: 'image.png',
  }

  beforeEach(function () {
    wrapper = mount(<MapLabel location={location} />)
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  describe('Events > MapLabel', function () {
    describe('onMouseEnter', function () {
      it('should show image thumbnail onHover', function () {
        wrapper.find(StyledAnchor).first().simulate('mouseenter')
        expect(wrapper.find(StyledImage).length).toBe(1)
      })

      it('should not show image thumbnail onLeave', function () {
        wrapper.find(StyledAnchor).first().simulate('mouseleave')
        expect(wrapper.find(StyledImage).length).toBe(0)
      })
    })
  })
})
