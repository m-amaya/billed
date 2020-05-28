import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'app/App';
import { GlobalStyles } from 'styles/GlobalStyles';
import { initIconLibrary } from 'styles/icons';

initIconLibrary();

/**
 * Context Providers
 */
const Providers: React.FC = ({ children }) => <Router>{children}</Router>;

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <GlobalStyles />
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById('app'),
);
