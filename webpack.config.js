const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const productionPlugins = isProd ? [] : [new ReactRefreshWebpackPlugin()];

  return {
    mode: isProd ? 'production' : 'development',
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
      pathinfo: !isProd,
      clean: true,
    },
    devtool: isProd ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.[j|t]sx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            plugins: [!isProd && require.resolve('react-refresh/babel')].filter(
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
