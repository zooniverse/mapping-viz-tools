import React from 'react'
import { shallow } from 'enzyme'
import { CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import MapDetail from './MapDetail'
import mockData from './mockData'

describe('Components > MapDetail', function () {
  let wrapper

  beforeEach(function() {
    wrapper = shallow(
      <MapDetail data={mockData} />
    )
  })
  
  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  it('should toggle subject visibility', function () {
    let markers = wrapper.find(Marker)
    expect(markers.length).toBe(0)
    let checkBox = wrapper.find(CheckBox).first()
    checkBox.simulate('change')
    markers = wrapper.find(Marker)
    expect(markers.length).toBe(7)
  })
})
