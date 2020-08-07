import React from 'react'
import { shallow } from 'enzyme'
import Chart from './Chart'

describe('Components > Chart', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Chart />)
    expect(wrapper).toBeDefined()
  })
})
