import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, NamedModulesPlugin } from 'webpack';
import { PATHS } from '../project.config';

/**
 * Webpack Common Configuration
 */
const config: Configuration = {
  target: 'web',
  entry: {
    app: PATHS.entry,
  },
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      ...PATHS.aliases,
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-url-loader',
          options: {
            stripdeclarations: true,
            iesafe: true,
            encoding: 'base64',
          },
        },
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      filename: PATHS.index.output,
      template: PATHS.index.input,
      favicon: PATHS.favicon,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { context: PATHS.aliases.assets, from: '**/*', to: 'assets/' },
      ],
    }),
  ],
};

export default config;
