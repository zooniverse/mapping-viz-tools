import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet } from 'grommet'
import theme from 'theme'
import 'leaflet/dist/leaflet.css';
import MapDetail from '../components/MapDetail'

storiesOf('MapDetail', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <MapDetail />
    </Grommet>
  ))
