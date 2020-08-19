import React from 'react';
import { storiesOf } from '@storybook/react';
import Subjects from '../components/Modals/Subjects'
import { Grommet } from 'grommet'
import theme from 'theme'

storiesOf('Subjects Modal', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Subjects />
    </Grommet>
  ))
