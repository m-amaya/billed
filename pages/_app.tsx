// import Flex from 'components/Flex';
import { AppProps } from 'next/app';
import React from 'react';
import * as icons from 'utils/icons';

import '../styles.css';

icons.init();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
