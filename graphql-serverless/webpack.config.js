const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './srcgraphqlHandler.ts', // Adjust to your actual entry file
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'graphqlHandler.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    libraryTarget: 'commonjs2', // For AWS Lambda compatibility
  },
  resolve: {
    extensions: ['.ts', '.js'], // File extensions to handle
    plugins: [new TsconfigPathsPlugin({ /* plugin options */ })], // To handle paths in tsconfig
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [
    // Exclude node_modules from the bundle
    (context, request, callback) => {
      if (/^[./]/.test(request) || /aws-sdk/.test(request)) {
        return callback();
      }
      callback(null, 'commonjs ' + request);
    },
  ],
};
