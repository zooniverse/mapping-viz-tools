import React from 'react'
import {
  Box,
  Button,
  Heading,
  Image,
  Text
} from 'grommet'
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
        <Heading color='kelp' level='6'>Associated Zooniverse Subjects ({subjects.length})</Heading>
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
        {!subjects.length && <Text>Select another year.</Text>}
        {firstTenSubjects.map((subject, i) => {
          return (
            <StyledButton
              key={`ASSOCIATED_SUBJECT_${subject.id}`}
              a11yTitle={`Subject ${subject.id}`}
              margin={{ bottom: '0.5rem' }}
              onClick={() => setActiveSubject(subject)}
              plain
            >
              <Box
                height='2.75em'
                width='2.75em'
              >
                <Image
                  alt={`Associated Subject ${subject.id}`}
                  fit='contain'
                  src={`//${subject.media_location}`}
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
    media_location: string
  }))
}
