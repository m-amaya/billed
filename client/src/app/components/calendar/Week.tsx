import styled from '@emotion/styled';
import React from 'react';

import { Day } from './Day';

interface Props {
  week: number[];
  isFirst?: boolean;
}

export const Week: React.FC<Props> = ({ week, isFirst = false }) => {
  return (
    <Wrapper first={isFirst.toString()}>
      {week.map((day, idx) => (
        <Day key={idx} day={day} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ first: string }>(({ first }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: first === 'true' ? 'flex-end' : 'flex-start',
}));
