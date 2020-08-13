import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { Close, FormNext, FormPrevious } from 'grommet-icons'
import { number } from 'prop-types'
import { PlainButton } from '@zooniverse/react-components'
import Map from 'images/satellite_map.png'
import styled from 'styled-components'

const StyledText = styled(Text)`
  vertical-align: middle;
`

const mockSubjects = new Array(19)
mockSubjects.fill({ alt: 'Falkland Islands Map', src: Map })

const chunk = (arr, size) => {
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size)
  )
}

export default function Subjects ({ subjects = mockSubjects }) {
  const [subjectIndex, changeSubjectIndex] = React.useState(0)
  const chunkedSubjects = chunk(subjects, 9)
  const lastIndex = chunkedSubjects.length - 1

  return (
    <Box
      border
      gap='xsmall'
      height='25em'
      pad='small'
      width='medium'
    >
      <Box direction='row' justify='between'>
        <Text>Associated subjects ({subjects.length})</Text>
        <PlainButton
          icon={<Close color='black' size='small' />}
          onClick={() => console.log('Close the modal')}
          text='Close'
          reverse
        />
      </Box>
      <Text>Click a subject to view it on Zooniverse Talk</Text>
      <Box
        direction='row'
        justify='between'
        width='medium'
        wrap
      >
        {chunkedSubjects[subjectIndex].map((subject, i) => {
          return (
            <Box
              key={`SUBJECTS_${i}`}
              basis='30%'
              margin={{ bottom: 'xsmall' }}
              height='5.5em'
            >
              <Image fit='contain' src={subject.src} />
            </Box>
          )
        })}
      </Box>
      <Box
        direction='row'
        gap='xxsmall'
        margin={{ horizontal: 'auto', top: 'auto' }}
      >
        <Button
          label={<StyledText size='0.5em'>&#9664;</StyledText>}
          onClick={() => changeSubjectIndex(0)}
          plain
        />
        {chunkedSubjects.map((subj, i) => {
          const char = i === subjectIndex ? `\u25CF` : `\u25CB`
          return (
            <Button onClick={() => changeSubjectIndex(i)}>
             {char}
            </Button>
          )
        })}
        <Button
          label={<StyledText size='0.5em'>&#9654;</StyledText>}
          onClick={() => changeSubjectIndex(lastIndex)}
          plain
        />
      </Box>
    </Box>
  )
}

Subjects.propTypes = {
  count: number
}
