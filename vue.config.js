module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'custom-index.html', 
        template: './public/index.html',
      })
    ]
  }
};