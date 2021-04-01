import React from 'react'
import { mount, shallow } from 'enzyme'
import Charts from './Charts'
import Plot from '../Plot'
import mockData from '../../mockData'

const mockYears = [1985, 1990, 1995, 2000, 2005]

const expectedAvgData = [
  { x: 1985, y: null },
  { x: 1990, y: null },
  { x: 1995, y: null },
  { x: 1999, y: 4.3864 },
  { x: 2000, y: null },
  { x: 2001, y: 978 },
  { x: 2005, y: 3.1602 },
  { x: 2013, y: 12.5265 },
  { x: 2014, y: 1.4246 },
  { x: 2016, y: 1.92595 }
]

describe('Components > Charts', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Charts />)
    expect(wrapper).toBeDefined()
  })

  it('should calc and pass data averages to corresponding Plot components', () => {
    wrapper = mount(<Charts 
      subjects={mockData}
      year={1985}
      years={mockYears}
    />)

    const plot = wrapper.find(Plot).at(0)
    expect(plot.props().data).toStrictEqual(expectedAvgData)
  })
})
