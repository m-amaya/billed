import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

interface Props {
  path: string;
  label: string;
  isActive: boolean;
}

const HeadLink: React.FC<Props> = ({ path, label, isActive }) => {
  return (
    <Link href={path}>
      <Tab isActive={isActive}>{label}</Tab>
    </Link>
  );
};

const Tab = styled.a<{ isActive: boolean }>(({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '4px solid',
  borderTopColor: isActive ? '#FFF' : 'transparent',
  color: isActive ? '#FFF' : '#BFB6E0',
  cursor: 'pointer',
  fontSize: 16,
  fontWeight: 600,
  marginRight: 25,
  textDecoration: 'none',
  textTransform: 'capitalize',
  transition: 'all 200ms',
  '&:hover': {
    color: '#FFF',
  },
}));

export default HeadLink;
