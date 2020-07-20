import React from 'react'
import { shallow } from 'enzyme'
import SidePanel from './SidePanel'

describe('Component > SidePanel', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<SidePanel />)
    expect(wrapper).toBeDefined()
  })
})
