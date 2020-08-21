import React from 'react'
import { shallow } from 'enzyme'
import DrawingOverlay, { SVG } from './DrawingOverlay'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Components > DrawingOverlay', function () {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<DrawingOverlay />)
  })
  
  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })
  
  describe('props', function () {
    it('should show a crosshair when able to draw', function () {
      wrapper = shallow(<DrawingOverlay canDraw />)
      const svg = wrapper.find(SVG).first()
      const renderedSvg = renderer.create(svg).toJSON()
      expect(renderedSvg).toHaveStyleRule('cursor', 'crosshair')
    })

    it('should show a default cursor when unable to draw', function () {
      wrapper = shallow(<DrawingOverlay />)
      const svg = wrapper.find(SVG).first()
      const renderedSvg = renderer.create(svg).toJSON()
      expect(renderedSvg).toHaveStyleRule('cursor', 'default')
    })
  })
  
  describe('functions', function () {
    describe('when unable to draw', function () {
      it('should not draw a rectangle', function () {
        let eventOne = { clientX: 100, clientY: 100 }
        let eventTwo = { clientX: 200, clientY: 200 }
        wrapper.simulate('pointerdown', eventOne)
        wrapper.simulate('pointermove', eventTwo)
        let rect = wrapper.find('rect')
        expect(rect.length).toBe(0)
      })
    })
    
    describe('when able to draw', function () {
      it('should set the rectangle', function () {
        let clientRect = { left: 0, top: 0 }
        let ref = {
          current: {
            getBoundingClientRect: () => clientRect
          }
        }
        jest
          .spyOn(React, 'useRef')
          .mockImplementation(() => ref)
        wrapper = shallow(<DrawingOverlay canDraw />)
        let eventOne = { clientX: 100, clientY: 100 }
        let eventTwo = { clientX: 200, clientY: 200 }
        wrapper.simulate('pointerdown', eventOne)
        wrapper.simulate('pointermove', eventTwo)
        let rect = wrapper.find('rect').first()
        expect(rect.props().x).toBe(eventOne.clientX)
        expect(rect.props().y).toBe(eventOne.clientY)
        
        wrapper.simulate('pointerup')
        let rectSecondInstance = wrapper.find('rect')
        expect(rectSecondInstance.length).toBe(0)
      })
    })
  })
})
  