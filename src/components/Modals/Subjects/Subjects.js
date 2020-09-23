import React from 'react'
import { Anchor, Box, Button, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { arrayOf, shape, string } from 'prop-types'
import { PlainButton } from '@zooniverse/react-components'
import styled from 'styled-components'

const Neuton = styled(Text)`
  font-family: Neuton;
`

const StyledText = styled(Text)`
  vertical-align: middle;
`

const mockSubjects = new Array(19)
mockSubjects.fill({ alt: 'Falkland Islands Map', link: '#', src: '' })

const chunk = (arr, size) => {
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size)
  )
}

export default function Subjects ({
  subjects = []
}) {
  const [subjectIndex, changeSubjectIndex] = React.useState(0)
  const chunkedSubjects = chunk(subjects, 9)
  const lastIndex = chunkedSubjects.length - 1

  return (
    <Box
      border
      elevation='small'
      gap='xsmall'
      height='25em'
      pad='small'
      width='medium'
    >
      <Box direction='row' justify='between'>
        <Text color='kelp'>Associated subjects ({subjects.length})</Text>
        <PlainButton
          icon={<Close color='black' size='small' />}
          onClick={() => console.log('Close the modal')}
          text='Close'
          reverse
        />
      </Box>
      <Neuton>Click a subject to view it on Zooniverse Talk</Neuton>
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
              <Anchor href={subject.link}>
                <Image
                  alt={subject.alt}
                  fit='contain'
                  src={`//${subject.subjectMediaLocation}`}
                  width='100%'
                />
              </Anchor>
            </Box>
          )
        })}
      </Box>
      {subjects.length > 9 && (
        <Box
          direction='row'
          gap='xxsmall'
          margin={{ horizontal: 'auto', top: 'auto' }}
        >
          <Button
            disabled={subjectIndex === 0}
            label={<StyledText size='0.5em'>&#9664;</StyledText>}
            onClick={() => changeSubjectIndex(subjectIndex - 1)}
            plain
          />
          {chunkedSubjects.map((subj, i) => {
            const char = i === subjectIndex ? `\u25CF` : `\u25CB`
            return (
              <Button key={`SUBJECTS_${i}`} onClick={() => changeSubjectIndex(i)}>
                {char}
              </Button>
            )
          })}
          <Button
            disabled={subjectIndex === lastIndex}
            label={<StyledText size='0.5em'>&#9654;</StyledText>}
            onClick={() => changeSubjectIndex(subjectIndex + 1)}
            plain
          />
        </Box>
      )}
    </Box>
  )
}

Subjects.propTypes = {
  subjects: arrayOf(shape({
    subjectMediaLocation: string
  }))
}
