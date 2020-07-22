import React from 'react'
import { shallow } from 'enzyme'
import MappingVizLogo from './MappingVizLogo'

describe('Components > MappingVizLogo', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<MappingVizLogo />)
    expect(wrapper).toBeDefined()
  })
})
