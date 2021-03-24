import React from 'react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { Button, CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import STATUS from 'helpers/asyncStatus'
import MapDetail, { Uppercase } from './MapDetail'
import mockData from './mockData'
import Loading from './components/Loading'
import MetadataModal from '../../components/Modals/Metadata'

describe('Components > MapDetail', () => {
  let wrapper
  const onCloseSpy = jest.fn()

  it('should render without props', () => {
    wrapper = shallow(<MapDetail />)
    expect(wrapper).toBeDefined()
  })

  it('should show Loading component when async status is loading', () => {
    wrapper = mount(
      <MapDetail
        asyncStatus={STATUS.LOADING}
        subjects={mockData}
        onClose={onCloseSpy}
      />
    )
    let loadingComponent = wrapper.find(Loading)
    expect(loadingComponent).toBeDefined()
  })

  beforeEach(function () {
    wrapper = mount(
      <MapDetail
        asyncStatus={STATUS.READY}
        subjects={mockData}
        onClose={onCloseSpy}
      />
    )
  })

  afterEach(() => jest.clearAllMocks())

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  describe('map area details', () => {
    // based on coordinates defaultProps
    it('should display map center coordinates', () => {
      const expectedDisplay = `51°70'S 60°10'W`
      const centerCoords = wrapper.find(Uppercase).at(1)
      const inner = centerCoords.find('span')
      expect(inner.text()).toEqual(expectedDisplay)
    })

    it('should display map area measurement', () => {
      const expectedDisplay = `3451 SQ MI / 5554 SQ KM`
      const mapArea = wrapper.find(Uppercase).at(2)
      const inner = mapArea.find('span')
      expect(inner.text()).toEqual(expectedDisplay)
    })
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

    it('should set an active subject and open modal', () => {
      let checkBox = wrapper.find(CheckBox).first()
      act(() => checkBox.props().onChange())
      wrapper.update()
      let markers = wrapper.find(Marker)
      expect(markers.length).toBe(7)
      let firstMarker = wrapper.find(Marker).first()
      act(() => firstMarker.props().onClick())
      wrapper.update()
      const metadataModal = wrapper.find(MetadataModal)
      expect(metadataModal.props().subject).toEqual(mockData[0])
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
