import React from 'react';
import { storiesOf } from '@storybook/react';
import MapPage from '../screens/MapPage'
import { Grommet } from 'grommet'
import theme from 'theme'

storiesOf('MapPage', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <MapPage />
    </Grommet>
  ))
