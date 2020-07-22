import React from 'react'
import { Anchor, Box, DropButton, Text } from 'grommet'
import { Down } from 'grommet-icons'
import { withThemeContext } from '@zooniverse/react-components'
import theme from './theme'

export const LocationDrop = function LocationDrop() {
  return (
    <DropButton
      alignSelf='start'
      label={<Text color='kelp' size='small'>CHANGE LOCATION</Text>}
      dropAlign={{ top : 'bottom' }}
      dropContent={
        <Box
          background='white'
          border={{ color: 'kelp' }}
          elevation='small'
        >
          <Anchor href='#' color='kelp' margin='xsmall' size='small'>Baja, California</Anchor>
          <Anchor href='#' color='kelp' margin='xsmall' size='small'>Tasmania, Australia</Anchor>
        </Box>
      }
      dropProps={{ margin: 'xsmall' }}
      gap='xsmall'
      icon={<Down color='kelp' size='small' />}
      plain
      reverse
    >
    </DropButton>
  )
}

export default withThemeContext(LocationDrop, theme)
