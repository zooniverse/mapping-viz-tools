import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { arrayOf, func, shape, string } from 'prop-types'
import { PlainButton } from '@zooniverse/react-components'
import styled from 'styled-components'

const Neuton = styled(Text)`
  font-family: Neuton;
`

const StyledText = styled(Text)`
  vertical-align: middle;
`

const chunk = (arr, size) => {
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size)
  )
}

export default function Subjects ({
  onClose = () => {},
  onSelectSubject = () => {},
  subjects = []
}) {
  const [subjectIndex, changeSubjectIndex] = React.useState(0)
  const chunkedSubjects = chunk(subjects, 9)
  const lastIndex = chunkedSubjects.length - 1
  const currentPage = chunkedSubjects[subjectIndex] || []

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
          onClick={() => onClose()}
          text='Close'
          reverse
        />
      </Box>
      <Neuton>Click a subject to view more information</Neuton>
      <Box
        direction='row'
        justify='between'
        width='medium'
        wrap
      >
        {currentPage.map((subject, i) => {
          return (
            <Box
              key={`SUBJECTS_${subject.id}`}
              basis='30%'
              margin={{ bottom: 'xsmall' }}
              height='5.5em'
            >
              <Button
                a11yTitle={`Select subject ${subject.id}`}
                onClick={() => {
                  onClose()
                  onSelectSubject(subject)
                }}
                plain
              >
                <Image
                  alt={subject.alt}
                  fit='contain'
                  src={`//${subject.media_location}`}
                  width='100%'
                />
              </Button>
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
            a11yTitle='Go to previous page of subjects'
            disabled={subjectIndex === 0}
            label={<StyledText size='0.5em'>&#9664;</StyledText>}
            onClick={() => changeSubjectIndex(subjectIndex - 1)}
            plain
          />
          {chunkedSubjects.map((subj, i) => {
            const char = i === subjectIndex ? `\u25CF` : `\u25CB`
            return (
              <Button
                key={`SUBJECTS_PAGE_${i}`}
                a11yTitle={`Go to subject page ${i}`}
                onClick={() => changeSubjectIndex(i)}
              >
                {char}
              </Button>
            )
          })}
          <Button
            a11yTitle='Go to next page of subjects'
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
  onClose: func,
  onSelectSubject: func,
  subjects: arrayOf(shape({
    media_location: string
  }))
}
