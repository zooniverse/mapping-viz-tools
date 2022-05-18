import React from 'react'
import { Box, Button, Heading, Image, Text } from 'grommet'
import { FormNext } from 'grommet-icons'
import { arrayOf, func, shape, string } from 'prop-types'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  display: flex;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  &:not(:nth-child(5n)) {
    margin-right: 10px;
  }
`

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function AssociatedSubjects({
  setActiveSubject = () => {},
  setShowSubjectsModal = () => {},
  subjects = [],
  subjectsErrorUI,
}) {
  const firstTenSubjects = subjects.slice(0, 10)

  return (
    <Box
      border={{ color: 'kelp', side: 'top' }}
      gap='xsmall'
      pad={{ top: 'xsmall' }}
      margin={{ top: 'xsmall' }}
      width='medium'
    >
      <Box align='center' direction='row' justify='between'>
        <Heading color='kelp' level='6'>
          Associated Subjects ({subjects.length})
        </Heading>
        {subjects.length > 10 && (
          <Button
            gap='10px'
            icon={<FormNext size='small' />}
            label={
              <Uppercase color='kelp' size='small'>
                See More
              </Uppercase>
            }
            onClick={() => setShowSubjectsModal(true)}
            plain
            reverse
          />
        )}
      </Box>
      {!subjects?.length ? (
        <Box>
          <Box height='50px' margin={{ bottom: '10px' }}>
            {subjectsErrorUI ? (
              <Text color='red'>
                Something went wrong in the subjects database.
              </Text>
            ) : (
              <Text>Select another year.</Text>
            )}
          </Box>
          <Box height='50px' margin={{ bottom: '10px' }} />
        </Box>
      ) : (
        <Box>
          <Box direction='row' wrap>
            {firstTenSubjects.map((subject, i) => {
              return (
                <StyledButton
                  key={`ASSOCIATED_SUBJECT_${subject.id}`}
                  a11yTitle={`Subject ${subject.id}`}
                  onClick={() => setActiveSubject(subject)}
                  plain
                >
                  <Image
                    alt={`Associated Subject ${subject.id}`}
                    fit='contain'
                    src={`//${subject.media_location}`}
                  />
                </StyledButton>
              )
            })}
          </Box>
          {subjects?.length && subjects?.length <= 5 && (
            <Box height='50px' margin={{ bottom: '10px' }} />
          )}
        </Box>
      )}
    </Box>
  )
}

AssociatedSubjects.propTypes = {
  setActiveSubject: func,
  setShowSubjectsModal: func,
  subjects: arrayOf(
    shape({
      media_location: string,
    })
  ),
}
