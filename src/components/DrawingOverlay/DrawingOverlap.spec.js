import React from 'react'
import { shallow } from 'enzyme'
import DrawingOverlay from './DrawingOverlay'

describe('Components > DrawingOverlay', function () {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<DrawingOverlay />)
  })
  
  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })
  
  describe('functions', function () {
    describe('when unable to draw', function () {
      it('should not draw a rectangle', function () {
        let eventOne = { clientX: 100, clientY: 100 }
        let eventTwo = { clientX: 200, clientY: 200 }
        wrapper.simulate('mousedown', eventOne)
        wrapper.simulate('mousemove', eventTwo)
        let rect = wrapper.find('rect').first()
        
        expect(rect.props().x).toBe(undefined)
        expect(rect.props().y).toBe(undefined)
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
        wrapper.simulate('mousedown', eventOne)
        wrapper.simulate('mousemove', eventTwo)
        let rect = wrapper.find('rect').first()
        expect(rect.props().x).toBe(eventOne.clientX)
        expect(rect.props().y).toBe(eventOne.clientY)
        
        wrapper.simulate('mouseup')
        let rectSecondInstance = wrapper.find('rect').first()
        expect(rectSecondInstance.props().x).toBe(undefined)
        expect(rectSecondInstance.props().y).toBe(undefined)
      })
    })
  })
})
  