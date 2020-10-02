import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet } from 'grommet'
import theme from 'theme'
import Metadata from '../components/Modals/Metadata'
import mockData from '../components/MapDetail/mockData'

storiesOf('Metadata Modal', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Metadata subject={mockData[0]} />
    </Grommet>
  ))
