var webpack = require('webpack');
module.exports = {
  entry: './handler.js',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.gql|.graphql$/,
        loaders: ['raw-loader'],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
        include: __dirname,
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({'global.GENTLY': false})],
  node: {
    __dirname: true,
  },
  alias: {
    inherits: 'inherits/inherits_browser.js',
    superagent: 'superagent/lib/client',
    emitter: 'component-emitter',
  },
};
