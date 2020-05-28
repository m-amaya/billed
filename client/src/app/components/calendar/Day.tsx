import styled from '@emotion/styled';
import React from 'react';

import { Card } from 'app/components/card/Card';

interface Props {
  day: number;
}

export const Day: React.FC<Props> = ({ day }) => {
  return (
    <Wrapper>
      <DayCard>
        <EventCol></EventCol>
        <DayCol>{day}</DayCol>
      </DayCard>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 3,
  width: `${100 / 7}%`,
});

const DayCard = styled(Card)({
  display: 'flex',
  height: '100%',
  padding: 10,
});

const EventCol = styled.div({
  flex: 1,
});

const DayCol = styled.div({
  fontSize: 13,
  textAlign: 'right',
});
