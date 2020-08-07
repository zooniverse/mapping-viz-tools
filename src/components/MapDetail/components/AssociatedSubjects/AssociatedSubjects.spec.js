import React from 'react'
import { shallow } from 'enzyme'
import AssociatedSubjects from './AssociatedSubjects'

describe('Components > AssociatedSubjects', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<AssociatedSubjects />)
    expect(wrapper).toBeDefined()
  })
})
