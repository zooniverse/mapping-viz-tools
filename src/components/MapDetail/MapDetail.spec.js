import React from 'react'
import { shallow } from 'enzyme'
import { Button, CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import MapDetail from './MapDetail'
import mockData from './mockData'

describe('Components > MapDetail', () => {
  let wrapper
  const setActiveSubjectSpy = jest.fn()
  const onCloseSpy = jest.fn()

  it('should render without props', () => {
    wrapper = shallow(<MapDetail />)
    expect(wrapper).toBeDefined()
  })

  beforeEach(() => {
    wrapper = shallow(
      <MapDetail
        data={mockData}
        setActiveSubject={setActiveSubjectSpy}
        onClose={onCloseSpy}
      />
    )
  })

  afterEach(() => jest.clearAllMocks())

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  describe('subject markers', () => {
    it('should toggle subject visibility', () => {
      let markers = wrapper.find(Marker)
      expect(markers.length).toBe(0)
      let checkBox = wrapper.find(CheckBox).first()
      checkBox.simulate('change')
      markers = wrapper.find(Marker)
      expect(markers.length).toBe(7)
    })

    it('should set an active subject', () => {
      let checkBox = wrapper.find(CheckBox).first()
      checkBox.simulate('change')
      let firstMarker = wrapper.find(Marker).first()
      firstMarker.props().onClick()
      expect(setActiveSubjectSpy).toHaveBeenCalledWith(mockData[0])
    })
  })

describe('MapDetail > useEffect', () => {
  it('should display location subheader based on coordinates props', () => {
    
  })
})

  describe('onClose button', () => {
    it('should close the modal', () => {
      const closeBtn = wrapper.find(Button).first()
      closeBtn.simulate('click')
      expect(onCloseSpy).toHaveBeenCalled()
    })
  })
})
