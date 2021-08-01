import { Grommet } from 'grommet'
import theme from 'theme'
import Metadata from '../components/Modals/Metadata'
import mockData from '../components/MapDetail/mockData'

export default {
  title: 'Metadata Modal',
  component: Metadata,
}

export const Default = () => (
  <Grommet theme={theme}>
    <Metadata subject={mockData[0]} />
  </Grommet>
)
