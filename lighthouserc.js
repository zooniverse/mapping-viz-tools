module.exports = {
  ci: {
    collect: {
      chromeFlags: ['--ignore-certificate-errors'],
      url: ['https://localhost:4000/'],
      startServerCommand: 'yarn start'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
