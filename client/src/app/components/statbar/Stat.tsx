import styled from '@emotion/styled';
import React from 'react';

import { rgba } from 'styles/color';
import { AmountText, LabelText } from 'styles/text';

interface Props {
  label: string;
  runningTotal: string;
  total: string;
}

export const Stat: React.FC<Props> = ({ label, runningTotal, total }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StatContainer>
        <AmountText style={{ fontSize: 20 }}>{runningTotal}</AmountText>
        <Total>
          / <LabelText style={{ fontSize: 14 }}>{total}</LabelText>
        </Total>
      </StatContainer>
    </Container>
  );
};

const Container = styled.div({
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'flex': 1,
  'borderRight': `1px solid ${rgba('#B2B2B2', 0.25)}`,
  '&:last-child': {
    borderRight: 'none',
  },
});

const Label = styled.div({
  color: '#9B98A6',
  fontSize: 14,
  paddingBottom: 5,
});

const StatContainer = styled.div({
  display: 'flex',
  alignItems: 'flex-end',
});

const Total = styled.div({
  paddingLeft: 5,
});
