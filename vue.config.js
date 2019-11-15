module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api/user': {
        target: 'http://localhost:5000'
      },
      '/api': {
        target: 'https://app.toursforfun.com'
      }
    }
  }
}