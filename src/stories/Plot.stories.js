import React from 'react';
import { storiesOf } from '@storybook/react';
import Plot from '../components/Plot'
import { Grommet } from 'grommet'
import theme from 'theme'

storiesOf('Plot', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Plot />
    </Grommet>
  ))
