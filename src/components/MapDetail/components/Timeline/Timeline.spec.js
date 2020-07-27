import React from 'react'
import { shallow } from 'enzyme'
import Timeline from './Timeline'

describe('Components > Timeline', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Timeline />)
    expect(wrapper).toBeDefined()
  })
})
