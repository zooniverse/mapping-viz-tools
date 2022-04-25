import React from 'react'
import { mount } from 'enzyme'
import { MapLabel, LinkStyle, StyledImage } from './MapLabel'
import theme from '../../../../../theme'
import { Grommet } from 'grommet'
import { Router } from 'react-router-dom'
import history from '../../../../../history'

let wrapper

describe('Component > MapLabel', function () {
  const location = {
    label: 'Baja, California',
    map: 'image.png',
  }

  beforeEach(function () {
    wrapper = mount(
      <Router history={history}>
        <Grommet theme={theme}>
          <MapLabel location={location} theme={theme} />
        </Grommet>
      </Router>
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  describe('Events > MapLabel', function () {
    describe('onMouseEnter', function () {
      it('should show image thumbnail onHover', function () {
        wrapper.find(LinkStyle).first().simulate('mouseenter')
        expect(wrapper.find(StyledImage).length).toBe(1)
      })

      it('should not show image thumbnail onLeave', function () {
        wrapper.find(LinkStyle).first().simulate('mouseleave')
        expect(wrapper.find(StyledImage).length).toBe(0)
      })
    })
  })
})
