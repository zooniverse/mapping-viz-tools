import React from 'react';
import { storiesOf } from '@storybook/react';
import Plot from '../components/MapDetail/components/Plot'
import { Box, Grommet } from 'grommet'
import theme from 'theme'

storiesOf('Plot', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <Plot />
    </Grommet>
  ))
