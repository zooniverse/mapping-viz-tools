import React from 'react'
import { shallow } from 'enzyme'
import MapDetail from './MapDetail'

describe('Components > MapDetail', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<MapDetail />)
    expect(wrapper).toBeDefined()
  })
})
