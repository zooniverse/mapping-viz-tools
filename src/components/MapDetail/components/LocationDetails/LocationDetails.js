import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { getArea, getLocationDetails } from 'helpers/getLocationDetails'

export const Uppercase = styled(Text)`
  letter-spacing: 1.23px;
  text-transform: uppercase;
`

const LocationDetails = ({ coordinates, mapCenterLat, mapCenterLng }) => {
  const [centerLat, setCenterLat] = React.useState(null)
  const [centerLng, setCenterLng] = React.useState(null)
  const [area, setArea] = React.useState(null)

  React.useEffect(() => {
    if (coordinates) {
      setArea(getArea(coordinates))
    }

    if (mapCenterLat && mapCenterLng) {
      setCenterLat(getLocationDetails(mapCenterLat, 'lat'))
      setCenterLng(getLocationDetails(mapCenterLng, 'lng'))
    }
  }, [coordinates, mapCenterLat, mapCenterLng])

  return (
    <Box
      direction='row'
      gap='xsmall'
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
