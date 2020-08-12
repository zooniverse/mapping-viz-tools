module.exports = {
  ci: {
    collect: {
      url: [
        'https://localhost:4000/',
        'https://localhost:4000/map'
      ],
      settings: {
        chromeFlags: '--ignore-certificate-errors',
      },
      startServerCommand: 'yarn start'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
