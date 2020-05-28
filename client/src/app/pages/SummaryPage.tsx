import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { OverviewPage } from 'app/pages/OverviewPage';
import { TransactionsPage } from 'app/pages/TransactionsPage';
import { BillsPage } from 'app/pages/BillsPage';
import { SavingsPage } from 'app/pages/SavingsPage';
import routes from 'app/routes';

export const SummaryPage: React.FC = () => {
  return (
    <Page>
      <Switch>
        <Route path={routes.summary.overview}>
          <OverviewPage />
        </Route>
        <Route path={routes.summary.transactions}>
          <TransactionsPage />
        </Route>
        <Route path={routes.summary.bills}>
          <BillsPage />
        </Route>
        <Route path={routes.summary.savings}>
          <SavingsPage />
        </Route>
        <Route path="*">
          <Redirect to={routes.summary.overview} />
        </Route>
      </Switch>
    </Page>
  );
};

const Page = styled.div({
  display: 'flex',
  height: '100%',
  padding: 40,
});
