import styled from '@emotion/styled';
import React from 'react';

export const TransactionsPage: React.FC = () => {
  return (
    <>
      <LeftCol>left</LeftCol>
      <RightCol>right</RightCol>
    </>
  );
};

const LeftCol = styled.div({
  backgroundColor: 'tomato',
  display: 'flex',
  flexDirection: 'column',
  width: 320,
});

const RightCol = styled.div({
  backgroundColor: 'aqua',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  paddingLeft: 40,
});
