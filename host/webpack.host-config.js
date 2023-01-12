const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'host-bundle-[name].js',
    chunkFilename: 'host-chunk-[name].js',
  },
  plugins: [
    new container.ModuleFederationPlugin({
      remotes: {
        myModule: 'myModule@http://localhost:3001/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
