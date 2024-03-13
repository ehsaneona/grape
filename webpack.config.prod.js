const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        // { from: 'categories.html', to: 'categories.html' },
        // { from: 'launchpad.html', to: 'launchpad.html' },
        // { from: 'marketplace.html', to: 'marketplace.html' },
        // { from: 'modal-1.html', to: 'modal-1.html' },
        // { from: 'modal-2.html', to: 'modal-2.html' },
        // { from: 'modal-3.html', to: 'modal-3.html' },
        // { from: 'modal-4.html', to: 'modal-4.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
