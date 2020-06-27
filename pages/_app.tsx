// import styled from '@emotion/styled'
import Flex from 'components/Flex';
import { AppProps } from 'next/app';
import React from 'react';
import * as icons from 'utils/icons';

import '../styles.css';

icons.init();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Flex height="100vh">
      <Component {...pageProps} />
    </Flex>
  );
};
export default App;
