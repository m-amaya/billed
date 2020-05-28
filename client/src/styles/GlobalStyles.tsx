import { css, Global } from '@emotion/core';
import React from 'react';

import bp from './breakpoint';
import font from './font';

const globalStyles = css({
  '#app': {
    'backgroundColor': '#FBFCFE',
    'color': '#49415E',
    'fontFamily': font.family,
    'fontSize': font.size,
    'fontWeight': font.weight.regular,
    'letterSpacing': '0.01rem',
    'lineHeight': 1.43,
    'height': '100vh',
    'minHeight': 800,
    'minWidth': bp.tablet,

    /** Font smoothing */
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased',

    /** Disable select */
    'userSelect': 'none',
    'WebkitTouchCallout': 'none',

    '*': {
      boxSizing: 'border-box',
    },
  },
});

export const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;
