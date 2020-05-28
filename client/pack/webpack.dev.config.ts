import {
  EnvironmentPlugin,
  Configuration,
  HotModuleReplacementPlugin,
} from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common.config';
import { PATHS, SERVER } from '../project.config';

/**
 * Webpack Dev Configuration
 */
const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    hot: true,
    overlay: false,
    staticOptions: { redirect: false },
    port: SERVER.port,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  output: {
    publicPath: '/',
  },
});

export default config;
