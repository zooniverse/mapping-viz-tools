import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { FormNext } from 'grommet-icons'
import { arrayOf, func, shape, string } from 'prop-types'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  flex: 0 1 20%;
`

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function AssociatedSubjects({
  setActiveSubject = () => {},
  setShowSubjectsModal = () => {},
  subjects = []
}) {
  const firstTenSubjects = subjects.slice(0,10)

  return (
    <Box
      border={{ color: 'kelp', side: 'top' }}
      gap='xsmall'
      pad={{ top: 'small' }}
      width='medium'
    >
      <Box align='center' direction='row' justify='between'>
        <Text color='kelp'>Associated Zooniverse Subjects ({subjects.length})</Text>
        {subjects.length > 10 && (
          <Button
            gap='0.2em'
            icon={<FormNext size='small' />}
            label={<Uppercase color='kelp' size='small'>See More</Uppercase>}
            onClick={() => setShowSubjectsModal(true)}
            plain
            reverse
          />
        )}
      </Box>
      <Box
        direction='row'
        wrap
      >
        {firstTenSubjects.map((subject, i) => {
          return (
            <StyledButton
              key={`ASSOCIATED_SUBJECT_${i}`}
              margin={{ bottom: '0.5rem' }}
              onClick={() => setActiveSubject(subject)}
              plain
            >
              <Box
                height='2.75em'
                width='2.75em'
              >
                <Image
                  fit='contain'
                  src={`//${subject.subjectMediaLocation}`}
                />
              </Box>
            </StyledButton>
          )
        })}
      </Box>
    </Box>
  )
}

AssociatedSubjects.propTypes = {
  setActiveSubject: func,
  setShowSubjectsModal: func,
  subjects: arrayOf(shape({
    subjectMediaLocation: string
  }))
}
