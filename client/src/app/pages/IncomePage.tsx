import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { IncomeDetailPage } from 'app/pages/IncomeDetailPage';
import { IncomeAddPage } from 'app/pages/IncomeAddPage';
import { IncomeEditPage } from 'app/pages/IncomeEditPage';
import routes from 'app/routes';
import { rgba } from 'styles/color';

export const IncomePage: React.FC = () => {
  return (
    <>
      <Sidebar>sidebar</Sidebar>
      <Page>
        <Switch>
          <Route exact path={routes.income.detail}>
            <IncomeDetailPage />
          </Route>
          <Route path={routes.income.add}>
            <IncomeAddPage />
          </Route>
          <Route path={routes.income.edit}>
            <IncomeEditPage />
          </Route>
          <Route path="*">
            <Redirect to={routes.income.detail.replace(':incomeId', '1234')} />
          </Route>
        </Switch>
      </Page>
    </>
  );
};

const Sidebar = styled.div({
  backgroundColor: '#FBFCFE',
  borderRight: `1px solid ${rgba('#B2B2B2', 0.25)}`,
  boxShadow: `0 1px 1px ${rgba('#B2B2B2', 0.5)}`,
  paddingTop: 50,
  width: 300,
});

const Page = styled.div({
  backgroundColor: '#FFFFFF',
  flex: 1,
  overflowY: 'auto',
  padding: 50,
});
