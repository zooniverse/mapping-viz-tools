import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { FormNext } from 'grommet-icons'
import styled from 'styled-components'
import Subjects from 'images/subjects.png'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function AssociatedSubjects() {
  return (
    <Box
      border={{ color: 'kelp', side: 'top' }}
      gap='xsmall'
      pad={{ top: 'small' }}
      width='medium'
    >
      <Box align='center' direction='row' justify='between'>
        <Text color='kelp'>Associated Zooniverse Subjects (32)</Text>
        <Button
          gap='0.2em'
          icon={<FormNext size='small' />}
          label={<Uppercase color='kelp' size='small'>See More</Uppercase>}
          plain
          reverse
        />
      </Box>
      <Image fit='contain' src={Subjects} />
    </Box>
  )
}
