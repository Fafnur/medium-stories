const webpack = require('webpack');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');

module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
      debug: true,
      output: {
        groupBy: [
          {
            pattern: '{../../../libs/*/src/assets/i18n/en.json,src/assets/i18n/en.json}',
            fileName: 'assets/locale/en.json'
          },
          {
            pattern: '{../../../libs/*/src/assets/i18n/ru.json,src/assets/i18n/ru.json}',
            fileName: 'assets/locale/ru.json'
          }
        ]
      },
      globOptions: {
        nosort: true
      }
    })
  ]
};
