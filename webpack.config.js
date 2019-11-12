const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill','./components/App.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  'node': {
    net: 'empty',
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};