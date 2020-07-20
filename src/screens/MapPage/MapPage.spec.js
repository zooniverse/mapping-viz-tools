import React from 'react'
import { shallow } from 'enzyme'
import MapPage from './MapPage'

describe('Component > MapPage', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<MapPage />)
    expect(wrapper).toBeDefined()
  })
})
