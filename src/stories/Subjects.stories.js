import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet } from 'grommet'
import theme from 'theme'
import Subjects from '../components/Modals/Subjects'
import mockData from '../components/MapDetail/mockData'

storiesOf('Subjects Modal', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Subjects subjects={mockData} />
    </Grommet>
  ))
