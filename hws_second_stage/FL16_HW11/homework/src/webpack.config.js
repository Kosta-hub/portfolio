const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
   context: path.resolve(__dirname, ''),
   mode: 'development',
   entry: './js/main.js',
   output: {
      filename: `./js/boundle.js`,
      path: path.resolve(__dirname, 'src'),
   },
   devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'src'),
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
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: `css/${filename('css')}`
      })
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
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     ['@babel/preset-env', { targets: "defaults" }]
                  ]
               },
            },
         },
      ]
   }
};