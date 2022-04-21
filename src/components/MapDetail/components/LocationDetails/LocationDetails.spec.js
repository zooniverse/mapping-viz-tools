import React from 'react'
import { shallow, mount } from 'enzyme'
import LocationDetails, { Uppercase } from './LocationDetails'

describe('Components > LocationDetails', () => {
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

  const mapCenterLat = -51.401305048249384
  const mapCenterLng = -57.87736494094134

  const wrapper = mount(
    <LocationDetails
      coordinates={defaultCoords}
      mapCenterLat={mapCenterLat}
      mapCenterLng={mapCenterLng}
    />
  )

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should display map center coordinates', () => {
    const expectedDisplay = `-51°40'S -57°87'W`
    const centerCoords = wrapper.find(Uppercase).at(0)
    const text = centerCoords.text()
    expect(text).toEqual(expectedDisplay)
  })

  it('should display map area measurement', () => {
    const expectedDisplay = `71 SQ MI / 114 SQ KM`
    const mapArea = wrapper.find(Uppercase).at(1)
    const text = mapArea.text()
    expect(text).toEqual(expectedDisplay)
  })
})
