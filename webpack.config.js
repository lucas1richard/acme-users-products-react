const path = require('path');

module.exports = {
  entry: './browser/react/index.js',
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
