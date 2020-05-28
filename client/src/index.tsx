import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'app/App';

/**
 * Context Providers
 */
const Providers: React.FC = ({ children }) => <Router>{children}</Router>;

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById('app'),
);
