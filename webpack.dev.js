const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  entry: ['babel-polyfill', path.join(__dirname, 'dev', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dev', 'build') ,
    library: 'react-infinite-scroll',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
});
