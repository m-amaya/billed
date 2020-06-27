import styled from '@emotion/styled';
import React from 'react';
import { rgba } from 'utils/color';

interface Props {
  size?: 'sm' | 'lg';
  onClick?(): void;
}

const BlockButton: React.FC<Props> = ({ size = 'sm', onClick, children }) => {
  return (
    <Block isLg={size === 'lg'} onClick={onClick}>
      {children}
    </Block>
  );
};

const Block = styled.button<{ isLg: boolean }>(({ isLg }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: rgba('#6744C8', 0.8),
  border: 'none',
  borderRadius: isLg ? 5 : 3,
  color: '#FFF',
  cursor: 'pointer',
  fontFamily: 'Muli',
  fontSize: isLg ? 17 : 12,
  fontWeight: 700,
  outline: 0,
  padding: '0 1em',
  textTransform: 'uppercase',
  transition: 'background 200ms',
  width: 'auto',
  height: isLg ? 40 : 25,
  '&:active': {
    backgroundColor: '#6744C8',
  },
}));

export default BlockButton;
