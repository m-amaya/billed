import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import React from 'react';

import { Title } from 'styles/text';

import { Month } from './Month';

export const Calendar: React.FC = () => {
  const now = DateTime.local();

  return (
    <Wrapper>
      <Header>
        <Title>
          {now.monthLong} {now.year}
        </Title>
      </Header>
      <Month />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const Header = styled.div({
  paddingTop: 30,
  paddingBottom: 10,
});
