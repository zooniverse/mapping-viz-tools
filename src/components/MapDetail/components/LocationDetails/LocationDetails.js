/** Refer to the Readme for why this component is styled as such */

import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { useMap } from 'react-leaflet'
import { getArea, getLocationDetails } from 'helpers/getLocationDetails'

export const Uppercase = styled(Text)`
  letter-spacing: 1.23px;
  text-transform: uppercase;
`

const LocationDetails = ({ coordinates }) => {
  const map = useMap()

  const [centerLat, setCenterLat] = React.useState(null)
  const [centerLng, setCenterLng] = React.useState(null)
  const [area, setArea] = React.useState(null)

  React.useEffect(() => {
    if (map && coordinates) {
      setArea(getArea(coordinates))
      setCenterLat(getLocationDetails(map.getCenter().lat, 'lat'))
      setCenterLng(getLocationDetails(map.getCenter().lng, 'lng'))
    }
  }, [coordinates])

  return (
    <Box
      direction='row'
      gap='xsmall'
      pad='xxsmall'
      style={{ position: 'absolute', top: 0, zIndex: 1000 }}
    >
      <Uppercase color='kelp' size='0.75rem'>
        {centerLat?.degrees}&#176;{centerLat?.minutes}'{centerLat?.direction}{' '}
        {centerLng?.degrees}&#176;
        {centerLng?.minutes}'{centerLng?.direction}
      </Uppercase>
      <Uppercase color='kelp' size='0.75rem'>
        {area?.miles} SQ MI / {area?.kms} SQ KM
      </Uppercase>
    </Box>
  )
}

export default LocationDetails
