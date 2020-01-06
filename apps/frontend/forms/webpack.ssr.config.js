// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

const distFolder = path.join(process.cwd(), 'dist');
const appsFolder = path.join(process.cwd(), 'apps');
const appName = 'frontend/forms';

module.exports = {
  mode: 'none',
  entry: {
    // This is our Express server for Dynamic universal
    server: path.join(appsFolder, appName, 'server.ts')
  },
  externals: {
    '../../../dist/apps/frontend/forms/server/main': 'require("./server/main")'
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimize: false
  },
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(distFolder, 'apps', appName),
    filename: '[name].js'
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true }
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(distFolder, 'apps', appName), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(distFolder, 'apps', appName),
      {}
    )
  ]
};
