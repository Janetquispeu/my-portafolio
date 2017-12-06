const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSass = new ExtractTextPlugin('css/[name].css')
let extractHtml = new ExtractTextPlugin('[name].html')

const config = {
  entry: ['./source/scripts/modules/footer.js', './source/styles/l-header.scss', './source/views/main.pug'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: ['html-loader', 'pug-html-loader?pretty&exports=false']
        })
      },
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    extractSass,
    extractHtml
  ]
};

module.exports = config;