import styled from '@emotion/styled';
import React from 'react';

import { Calendar } from 'app/components/calendar/Calendar';
import { Card } from 'app/components/card/Card';
import { CardRow } from 'app/components/card/CardRow';
import { DividerRow } from 'app/components/card/DividerRow';
import { Stat } from 'app/components/statbar/Stat';
import { Statbar } from 'app/components/statbar/Statbar';
import { AmountText, LabelText } from 'styles/text';

export const OverviewPage: React.FC = () => {
  return (
    <>
      <LeftCol>
        <Statbar>
          <Stat
            label="Income (May)"
            runningTotal="$3,453.52"
            total="$8,514.12"
          />
          <Stat
            label="Bills (May)"
            runningTotal="$3,453.52"
            total="$8,514.12"
          />
          <Stat
            label="Balance (May)"
            runningTotal="$3,453.52"
            total="$8,514.12"
          />
        </Statbar>
        <Calendar />
      </LeftCol>
      <RightCol>
        <Card style={{ width: '100%', maxHeight: '100%', overflowY: 'auto' }}>
          <DividerRow withborder="bottom">
            <LabelText>Cash</LabelText>
            <AmountText kind="credit" size="big">
              $33,525.50
            </AmountText>
          </DividerRow>
          <CardRow icon="university" label="Checking" subtext="Chase Bank">
            <AmountText>$3,253.23</AmountText>
          </CardRow>
          <CardRow icon="university" label="Savings" subtext="Chase Bank">
            <AmountText>$1,525.23</AmountText>
          </CardRow>
          <CardRow icon="compact-disc" label="CD" subtext="Marcus">
            <AmountText>$5,000.00</AmountText>
          </CardRow>
          <DividerRow>
            <LabelText>Debt</LabelText>
            <AmountText kind="debt" size="big">
              $33,525.50
            </AmountText>
          </DividerRow>
          <CardRow
            icon={'credit-card'}
            label="Apple Pay"
            subtext="Mastercard ...5545">
            <AmountText kind="debt">$5,000.00</AmountText>
          </CardRow>
          <CardRow
            icon={'credit-card'}
            label="Apple Pay"
            subtext="Mastercard ...5545">
            <AmountText kind="debt">$5,000.00</AmountText>
          </CardRow>
          <CardRow
            icon={'credit-card'}
            label="Apple Pay"
            subtext="Mastercard ...5545">
            <AmountText kind="debt">$5,000.00</AmountText>
          </CardRow>
          <DividerRow withborder="top">
            <LabelText>Total</LabelText>
            <AmountText kind="credit" size="big">
              $33,525.50
            </AmountText>
          </DividerRow>
        </Card>
      </RightCol>
    </>
  );
};

const LeftCol = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  paddingRight: 40,
});

const RightCol = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 320,
});
