import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { rgba } from 'styles/color';
import font from 'styles/font';

export const ActionButton: React.FC = ({ children }) => {
  return (
    <Button>
      <Icon icon="plus-circle" />
      {children}
    </Button>
  );
};

const Button = styled.button({
  'border': `1px solid ${rgba('#B2B2B2', 0.5)}`,
  'borderRadius': 5,
  'color': '#6744C8',
  'cursor': 'pointer',
  'fontSize': 16,
  'fontWeight': font.weight.bold,
  'height': 40,
  'outline': 0,
  'padding': '0 10px',
  'transition': 'background-color 200ms',
  '&:active': {
    backgroundColor: rgba('#B2B2B2', 0.25),
  },
});

const Icon = styled(FontAwesomeIcon)({
  marginRight: 8,
});
