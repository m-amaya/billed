import styled from '@emotion/styled';
import React from 'react';

import font from 'styles/font';
import { rgba } from 'styles/color';

export const Button: React.FC = ({ children }) => {
  return <Btn>{children}</Btn>;
};

const Btn = styled.button({
  'cursor': 'pointer',
  'backgroundColor': rgba('#6744C8', 0.8),
  'border': 'none',
  'borderRadius': 5,
  'color': '#FFFFFF',
  'fontFamily': font.family,
  'fontWeight': font.weight.bold,
  'height': 40,
  'outline': 0,
  'padding': '0 1rem',
  'textTransform': 'uppercase',
  'transition': 'background 200ms',
  '&:active': {
    backgroundColor: '#6744C8',
  },
});
