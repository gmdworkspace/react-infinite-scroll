const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  entry: [path.join(__dirname, 'src', 'index.js')],
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') ,
    library: 'super-react-infinite-scroll',
    libraryTarget: 'umd'
  },
});
