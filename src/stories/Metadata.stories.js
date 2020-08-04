import React from 'react';
import { storiesOf } from '@storybook/react';
import Metadata from '../components/Modals/Metadata'
import { Grommet } from 'grommet'
import theme from 'theme'

storiesOf('Metadata Modal', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Metadata />
    </Grommet>
  ))
