const path = require('path');
const entry = process.env.NODE_ENV === 'dev' ?
  ['babel-polyfill', path.join(__dirname, 'dev', 'index.js')] :
  [path.join(__dirname, 'src', 'index.js')];
const outputPath = process.env.NODE_ENV === 'dev' ?
  path.resolve(__dirname, 'dev', 'build') :
  path.resolve(__dirname, 'build');

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    path: outputPath,
    library: 'react-infinite-scroll',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dev"),
    compress: true,
    port: 9000
  }

};