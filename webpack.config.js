const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ prod } = {}) => {
  return {
    mode: prod ? 'production' : 'development',
    entry: {
      index: './src/',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      pathinfo: !prod,
    },
    devtool: prod ? 'none' : 'source-map',
    module: {
      rules: [
        {
          test: /\.[j|t]sx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CleanWebpackPlugin({ verbose: false }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true,
      port: 3000,
      stats: 'errors-only',
    },
    bail: true,
    node: false,
    stats: {
      assets: true,
      cached: false,
      chunks: false,
      children: false,
      modules: false,
      hash: false,
      version: true,
      timings: true,
      warnings: true,
      errors: true,
      errorDetails: true,
      builtAt: false,
      entrypoints: false,
    },
  };
};
