import React from 'react'
import { shallow } from 'enzyme'
import DrawingOverlay from './DrawingOverlay'

describe('Components > DrawingOverlay', function () {
    it('should render without crashing', function () {
      const wrapper = shallow(<DrawingOverlay />)
      expect(wrapper).toBeDefined()
    })
  })
  