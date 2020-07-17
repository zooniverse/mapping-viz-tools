import zooTheme from '@zooniverse/grommet-theme'
import merge from 'lodash/merge'

const theme = {
  global: {
    colors: {
      border: 'black',
      kelp: '#113E3B',
      indiglo: '#EEFEC0',
      sand: '#F5F4F1',
      text: {
        dark: '#222222',
        light: '#222222'
      }
    },
    font: {
      face: `
        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src:
            local('Karla'),
            local('Karla-Regular'),
            url(https://fonts.gstatic.com/s/karla/v6/qkBbXvYC6trAT7RVLtyU5rZP.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 700;
          src:
            local('Karla Bold'),
            local('Karla-Bold'),
            url(https://fonts.gstatic.com/s/karla/v6/qkBWXvYC6trAT7zuC8m5xLtlmgzD.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Neuton';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src:
            local('Neuton'),
            local('Neuton-Light'),
            url(https://fonts.gstatic.com/s/neuton/v12/UMBQrPtMoH62xUZKZKovfQr4LLkw6A.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `
    }
  },
<<<<<<< HEAD
  anchor: {
    color: 'black',
    fontWeight: 'medium',
    textDecoration: 'underline'
  },
  checkBox: {
    border: {
      width: '1px'
    },
    check: {
      radius: 0
    },
    gap: '0.25em',
    size: '0.75rem',
  }
}

export default merge({}, theme, zooTheme);
