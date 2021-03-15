import React from 'react'
import { shallow } from 'enzyme'
import { CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import MapDetail from './MapDetail'
import mockData from './mockData'

describe('Components > MapDetail', function () {
  let wrapper
  const setActiveSubjectSpy = jest.fn()

  it('should render without props', function () {
    wrapper = shallow(<MapDetail />)
    expect(wrapper).toBeDefined()
  })

  beforeEach(function() {
    wrapper = shallow(
      <MapDetail data={mockData} setActiveSubject={setActiveSubjectSpy} />
    )
  })

  afterEach(() => jest.clearAllMocks());
  
  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  describe('subject markers', function () {
    it('should toggle subject visibility', function () {
      let markers = wrapper.find(Marker)
      expect(markers.length).toBe(0)
      let checkBox = wrapper.find(CheckBox).first()
      checkBox.simulate('change')
      markers = wrapper.find(Marker)
      expect(markers.length).toBe(7)
    })

    it('should set an active subject', function () {
      let checkBox = wrapper.find(CheckBox).first()
      checkBox.simulate('change')
      let firstMarker = wrapper.find(Marker).first()
      firstMarker.props().onClick()
      expect(setActiveSubjectSpy).toHaveBeenCalledWith(mockData[0])
    })
  })
})
