import React from 'react'
import { mount } from 'enzyme'
import DrawingOverlay, { SVG } from './DrawingOverlay'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { MapContainer } from 'react-leaflet'

describe('Components > DrawingOverlay', function () {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <MapContainer>
        <DrawingOverlay />
      </MapContainer>
    )
  })

  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  describe('props', function () {
    it('should show a default cursor when unable to draw', function () {
      const svg = wrapper.find(SVG).first()
      const renderedSvg = renderer.create(svg).toJSON()
      expect(renderedSvg).toHaveStyleRule('cursor', 'default')
    })

    it('should show a crosshair when able to draw', function () {
      wrapper = mount(
        <MapContainer>
          <DrawingOverlay canDraw />
        </MapContainer>
      )
      const svg = wrapper.find(SVG).first()
      const renderedSvg = renderer.create(svg).toJSON()
      expect(renderedSvg).toHaveStyleRule('cursor', 'crosshair')
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
        let svgRef = {
          current: {
            getBoundingClientRect: () => clientRect,
          },
        }
        jest.spyOn(React, 'useRef').mockImplementation(() => svgRef)
        wrapper = mount(
          <MapContainer height='500px' width='500px' zoom={8} center={[41.866227, -87.606720]}>
            <DrawingOverlay canDraw />
          </MapContainer>
        )
        let eventOne = { clientX: 100, clientY: 100 }
        let eventTwo = { clientX: 200, clientY: 200 }
        const svgLayer = wrapper.find('svg').first()
        svgLayer.simulate('pointerdown', eventOne)
        svgLayer.simulate('pointermove', eventTwo)
        let rect = wrapper.childAt(0).find('rect').first()
        expect(rect.props().x).toBe(eventOne.clientX)
        expect(rect.props().y).toBe(eventOne.clientY)

        svgLayer.simulate('pointerup')
        let rectSecondInstance = wrapper.find('rect')
        expect(rectSecondInstance.length).toBe(0)
      })

      it('should not set coordinates if pointer event does not draw a rectangle', function () {
        const setCoordsSpy = jest.fn()
        let clientRect = { left: 0, top: 0 }
        let svgRef = {
          current: {
            getBoundingClientRect: () => clientRect,
          },
        }
        jest.spyOn(React, 'useRef').mockImplementation(() => svgRef)
        wrapper = mount(
          <MapContainer>
            <DrawingOverlay canDraw />
          </MapContainer>
        )
        let click = { clientX: 100, clientY: 100 }
        wrapper.simulate('pointerdown', click)
        wrapper.simulate('pointerup')
        expect(setCoordsSpy).toHaveBeenCalledTimes(0)
      })
    })
  })
})
