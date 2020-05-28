import styled from '@emotion/styled';
import React from 'react';

export const OverviewPage: React.FC = () => {
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
  flex: 1,
  paddingRight: 40,
});

const RightCol = styled.div({
  backgroundColor: 'aqua',
  display: 'flex',
  flexDirection: 'column',
  width: 320,
});
