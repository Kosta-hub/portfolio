const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
   mode: 'development',
   entry: './js/main.js',
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'app'),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: path.resolve(__dirname, 'index.html'),
         filename: 'index.html',
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new MiniCssExtractPlugin({
         filename: `./css/${filename('css')}`
      }),
   ],
   devtool: isProd ? false : 'source-map',
   module: {
      rules: [
         {
            test: /\.html$/,
            loader: 'html-loader',
         },
         {
            test: /\.css$/i,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     hmr: isDev
                  },
               },
               'css-loader'
            ],
         },
         {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         }
      ]
   }
}