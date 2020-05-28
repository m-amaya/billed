import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Link } from 'react-router-dom';

import { rgba } from 'styles/color';
import font from 'styles/font';

interface Props {
  icon: IconProp;
  label: string;
  path: string;
  isActive: boolean;
}

export const TabLink: React.FC<Props> = ({ icon, label, path, isActive }) => {
  return (
    <RouteLink to={path} isactive={isActive.toString()}>
      <Icon icon={icon} />
      <Label>{label}</Label>
    </RouteLink>
  );
};

const RouteLink = styled(Link)<{ isactive: string }>((props) => ({
  'display': 'flex',
  'alignItems': 'center',
  'backgroundColor': props.isactive === 'true' ? '#FAFAFA' : '#FFFFFF',
  'borderLeft': `1px solid ${rgba('#B2B2B2', 0.5)}`,
  'color': '#6744C8',
  'fontSize': 16,
  'fontWeight':
    props.isactive === 'true' ? font.weight.bold : font.weight.regular,
  'justifyContent': 'center',
  'padding': '0 20px',
  'textDecoration': 'none',
  'transition': 'all 200ms',
  '&:hover': {
    backgroundColor: '#FAFAFA',
  },
  '&:last-child': {
    borderRight: `1px solid ${rgba('#B2B2B2', 0.5)}`,
  },
}));

const Icon = styled(FontAwesomeIcon)({
  fontSize: 18,
});

const Label = styled.span({
  paddingLeft: 10,
});
