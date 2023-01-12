const path = require('path');
const { container } = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'module-bundle-[name].js',
    chunkFilename: 'module-chunk-[name].js',
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'myModule',
      filename: 'remoteEntry.js',
      exposes: {
        './testValue': path.resolve(__dirname, 'src/testValue.js'),
      },
    }),
  ],
};
