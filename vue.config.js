module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api/order': {
        target: 'http://10.20.152.32:5000'
      },
      '/api/user': {
        target: 'http://10.20.152.32:5000'
      },
<<<<<<< HEAD
=======
	  '/api/order':{
		  target: 'http://10.20.152.32:5000'
	  },
>>>>>>> whb
      '/api': {
        target: 'https://app.toursforfun.com'
      }
    }
  }
}