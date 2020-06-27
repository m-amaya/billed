import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { rgba } from 'utils/color';

interface Props {
  icon: IconProp;
  label: string;
  path: string;
  isActive: boolean;
}

const TabLink: React.FC<Props> = ({ icon, label, path, isActive }) => {
  return (
    <Link href={path}>
      <Tab isActive={isActive}>
        <FAIcon icon={icon} />
        <Label isActive={isActive}>{label}</Label>
      </Tab>
    </Link>
  );
};

const Tab = styled.a<{ isActive: boolean }>(({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: isActive ? '#FAFAFA' : '#FFF',
  borderLeft: `1px solid ${rgba('#B2B2B2', 0.5)}`,
  cursor: 'pointer',
  paddingLeft: 20,
  paddingRight: 20,
  textDecoration: 'none',
  transition: 'all 200ms',
  '&:hover': {
    backgroundColor: '#FAFAFA',
  },
  '&:last-child': {
    borderRight: `1px solid ${rgba('#B2B2B2', 0.5)}`,
  },
}));

const FAIcon = styled(FontAwesomeIcon)({
  color: '#6744C8',
  fontSize: 18,
  marginRight: 10,
});

const Label = styled.span<{ isActive: boolean }>(({ isActive }) => ({
  color: '#6744C8',
  fontSize: 16,
  fontWeight: isActive ? 700 : 400,
}));

export default TabLink;
