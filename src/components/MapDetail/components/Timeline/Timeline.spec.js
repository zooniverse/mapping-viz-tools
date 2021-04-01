import React from 'react'
import { shallow } from 'enzyme'
import Timeline from './Timeline'

describe('Components > Timeline', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Timeline />)
    expect(wrapper).toBeDefined()
  })
})
