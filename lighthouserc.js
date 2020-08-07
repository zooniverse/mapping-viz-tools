module.exports = {
  ci: {
    collect: {
      url: ['https://localhost:4000/'],
      startServerCommand: 'yarn start'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
