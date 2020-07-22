import React from 'react'
import { shallow } from 'enzyme'
import { LocationDrop } from './LocationDrop'

describe('Component > LocationDrop', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<LocationDrop />)
    expect(wrapper).toBeDefined()
  })
})
