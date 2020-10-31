const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = ({ prod } = {}) => {
  const productionPlugins = prod ? [] : [new ReactRefreshWebpackPlugin()];

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
    devtool: prod ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.[j|t]sx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            plugins: [!prod && require.resolve('react-refresh/babel')].filter(
              Boolean,
            ),
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CleanWebpackPlugin({ verbose: false }),
      ...productionPlugins,
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
      hot: true,
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
