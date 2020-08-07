import React from 'react';
import { storiesOf } from '@storybook/react';
import MapDetail from '../components/MapDetail'
import { Grommet } from 'grommet'
import theme from 'theme'

storiesOf('MapDetail', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <MapDetail />
    </Grommet>
  ))
