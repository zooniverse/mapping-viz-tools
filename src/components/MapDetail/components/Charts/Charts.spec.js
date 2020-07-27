import React from 'react'
import { shallow } from 'enzyme'
import Charts from './Charts'

describe('Components > Charts', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Charts />)
    expect(wrapper).toBeDefined()
  })
})
