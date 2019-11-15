module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api/user': {
        target: 'http://localhost:9000'
      },
	  '/api': {
	    target: 'https://app.toursforfun.com'
	  }
    }
  }
}