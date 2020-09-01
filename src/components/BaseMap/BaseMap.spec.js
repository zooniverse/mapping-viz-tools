import React from 'react'
import { shallow } from 'enzyme'
import BaseMap from './BaseMap'

describe('Components > BaseMap', function () {
    it('should render without crashing', function () {
      const wrapper = shallow(<BaseMap />)
      expect(wrapper).toBeDefined()
    })
  })
  