import React from 'react'
import { mount, shallow } from 'enzyme'
import Charts from './Charts'
import Plot from '../Plot'
import mockData from '../../mockData'

const mockYears = [1995, 2000, 2005, 2010, 2015]

const expectedAvgData = [
  { x: 2000, y: 2.5155333333333334 },
  { x: 2001, y: 9.78 },
  { x: 2013, y: 12.5265 },
  { x: 2014, y: 1.4246 },
  { x: 2016, y: 3.8519 }
]

describe.only('Components > Charts', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Charts />)
    expect(wrapper).toBeDefined()
  })

  it('should calc and pass data averages to corresponding Plot components', () => {
    wrapper = mount(
      <Charts subjects={mockData} year={2000} years={mockYears} />
    )

    const plot = wrapper.find(Plot).at(0)
    expect(plot.props().data).toStrictEqual(expectedAvgData)
  })
})
