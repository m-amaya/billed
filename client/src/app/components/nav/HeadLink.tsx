import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import font from 'styles/font';

interface Props {
  path: string;
  label: string;
}

export const HeadLink: React.FC<Props> = ({ path, label }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(path);

  return (
    <RouteLink to={path} isactive={isActive.toString()}>
      {label}
    </RouteLink>
  );
};

const RouteLink = styled(Link)<{ isactive: string }>((props) => ({
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'borderTop': '4px solid',
  'borderTopColor': props.isactive === 'true' ? '#FFFFFF' : 'transparent',
  'color': props.isactive === 'true' ? '#FFFFFF' : '#BFB6E0',
  'fontSize': 16,
  'fontWeight': font.weight.bold,
  'marginRight': 25,
  'textDecoration': 'none',
  'textTransform': 'capitalize',
  'transition': 'all 200ms',
  '&:hover': {
    color: '#FFFFFF',
  },
}));
