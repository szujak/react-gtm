const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
      test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      beautify: false,
      comments: false
    })
  ]
};
