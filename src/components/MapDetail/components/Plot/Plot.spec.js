import React from 'react'
import Plot from './Plot'
import { shallow } from 'enzyme'

describe('Component > Plot', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Plot />)
    expect(wrapper).toBeDefined()
  })
})