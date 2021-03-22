import React from 'react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { Button, CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import STATUS from 'helpers/asyncStatus'
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

  beforeEach(function () {
    wrapper = mount(
      <MapDetail
        asyncStatus={STATUS.READY}
        subjects={mockData}
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
      act(() => checkBox.props().onChange())
      wrapper.update()
      markers = wrapper.find(Marker)
      expect(markers.length).toBe(7)
    })

    it('should set an active subject', () => {
      let checkBox = wrapper.find(CheckBox).first()
      act(() => checkBox.props().onChange())
      wrapper.update()
      let firstMarker = wrapper.find(Marker).first()
      firstMarker.props().onClick()
      expect(setActiveSubjectSpy).toHaveBeenCalledWith(mockData[0])
      // use RTL to test if activeSubject state is mockData[0]
      // test of the modal opens?
    })
  })

  describe('See More Subjects button', () => {
    // use RTL to test if showSubjectModal state is true
  })

  describe('onClose button', () => {
    it('should close the modal', () => {
      const closeBtn = wrapper.find(Button).first()
      closeBtn.simulate('click')
      expect(onCloseSpy).toHaveBeenCalled()
    })
  })
})
