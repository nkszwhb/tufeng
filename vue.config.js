module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api/user': {
        target: 'http://10.20.152.32:5000'
      },
	  '/api/order':{
		  target: 'http://10.20.152.32:5000'
	  },
      '/api': {
        target: 'https://app.toursforfun.com'
      }
    }
  }
}