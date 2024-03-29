const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
  },
  devServer: {
    static: './build',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};