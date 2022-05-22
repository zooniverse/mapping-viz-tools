import React from 'react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { Button, CheckBox } from 'grommet'
import { Marker } from 'react-leaflet'
import STATUS from 'helpers/asyncStatus'
import MapDetail from './MapDetail'
import mockData from './mockData'
import Loading from './components/Loading'
import MetadataModal from '../../components/Modals/Metadata'
import AssociatedSubjects from './components/AssociatedSubjects'

describe('Components > MapDetail', () => {
  let wrapper
  const onCloseSpy = jest.fn()

  const defaultCoords = {
    northEast: {
      lat: -51.34401520040366,
      lng: -57.813190743327155,
    },
    southWest: {
      lat: -51.45852322420228,
      lng: -57.941539138555534,
    },
    width: '100%',
    height: '100%',
  }

  it('should render without props', () => {
    wrapper = shallow(<MapDetail coordinates={defaultCoords} />)
    expect(wrapper).toBeDefined()
  })

  it('should show Loading component when async status is loading', () => {
    wrapper = mount(
      <MapDetail
        asyncStatus={STATUS.LOADING}
        coordinates={defaultCoords}
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
        coordinates={defaultCoords}
        subjects={mockData}
        onClose={onCloseSpy}
      />
    )
  })

  afterEach(() => jest.clearAllMocks())

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should filter subjects based on current selected year', function () {
    expect(wrapper.find(AssociatedSubjects).props().subjects).toHaveLength(3)
  })

  describe('subject markers', () => {
    it('should toggle subject visibility for current selected year', () => {
      let markers = wrapper.find(Marker)
      expect(markers.length).toBe(0)
      let checkBox = wrapper.find(CheckBox).first()
      act(() => checkBox.props().onChange())
      wrapper.update()
      markers = wrapper.find(Marker)
      expect(markers.length).toBe(3)
    })

    it('should set an active subject and open modal', () => {
      let checkBox = wrapper.find(CheckBox).first()
      act(() => checkBox.props().onChange())
      wrapper.update()
      const firstMarker = wrapper.find(Marker).first()
      act(() => firstMarker.prop('eventHandlers').click())
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
