const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/m',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'm.js'
  },
  resolve: {
    extensions: ['.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  }
};