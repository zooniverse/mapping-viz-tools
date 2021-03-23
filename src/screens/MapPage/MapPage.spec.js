import React from 'react'
import { shallow } from 'enzyme'
import MapPage from './MapPage'

describe('Component > MapPage', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<MapPage />)
    expect(wrapper).toBeDefined()
  })

  it('should call getSubjects when selected coordinates change', () => {
    
  })
})
