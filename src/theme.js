import zooTheme from '@zooniverse/grommet-theme'
import merge from 'lodash/merge'

const theme = {
    global: {
      colors: {
        kelp: '#113E3B',
        sand: '#F5F4F1'
      }
    }
}

export default merge({}, theme, zooTheme);
