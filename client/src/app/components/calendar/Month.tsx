import styled from '@emotion/styled';
import moment from 'moment';
import React from 'react';

import { Card } from 'app/components/card/Card';
import font from 'styles/font';

import { Week } from './Week';

const getCalendar = () => {
  const now = moment();
  const firstDay = 1;
  const endDay = now.daysInMonth();
  let calendar = [];
  let currentDay = firstDay;
  let currentWeek = [];

  while (currentDay <= endDay) {
    const day = moment().month(now.month()).date(currentDay).year(now.year());

    if (day.weekday() === 0 || currentDay > endDay) {
      calendar.push(currentWeek);
      currentWeek = [];
    }

    currentWeek[day.weekday()] = currentDay;
    currentDay++;
  }

  calendar.push(currentWeek);

  return calendar;
};

export const Month: React.FC = () => {
  const calendar = getCalendar();

  return (
    <Wrapper>
      <DaysOfWeek>
        <WeekDay>Sun</WeekDay>
        <WeekDay>Mon</WeekDay>
        <WeekDay>Tue</WeekDay>
        <WeekDay>Wed</WeekDay>
        <WeekDay>Thu</WeekDay>
        <WeekDay>Fri</WeekDay>
        <WeekDay>Sat</WeekDay>
      </DaysOfWeek>
      {calendar.map((week, idx) => (
        <Week key={idx} week={week} isFirst={idx === 0} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const DaysOfWeek = styled.div({
  display: 'flex',
  height: 50,
});

const WeekDay = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  fontSize: 13,
  fontWeight: font.weight.bold,
});
