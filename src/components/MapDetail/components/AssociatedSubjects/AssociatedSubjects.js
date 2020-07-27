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
    <Box gap='xsmall'>
      <Box align='center' direction='row' justify='between'>
        <Text color='kelp'>Associated Subjects (32)</Text>
        <Button
          gap='0.2em'
          icon={<FormNext size='small' />}
          label={<Uppercase color='kelp' size='small'>See More</Uppercase>}
          plain
          reverse
        />
      </Box>
      <Image src={Subjects} />
    </Box>
  )
}
