const path = require('path');
const outputPath = process.env.NODE_ENV === 'dev' ?
  path.resolve(__dirname, 'dev', 'build') :
  path.resolve(__dirname, 'build');

module.exports = {
  entry:[path.join(__dirname, 'src', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: outputPath,
    library: 'react-infinite-scroll',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
};