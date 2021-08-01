import MapPage from '../screens/MapPage'
import { Grommet } from 'grommet'
import theme from 'theme'

export default {
  title: 'MapPage',
  component: MapPage,
}

export const Default = () => (
  <Grommet theme={theme}>
    <MapPage />
  </Grommet>
)
