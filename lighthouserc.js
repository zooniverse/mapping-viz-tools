module.exports = {
  ci: {
    collect: {
      url: ['https://localhost:4000/'],
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
