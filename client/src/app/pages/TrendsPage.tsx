import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { BudgetingPage } from 'app/pages/BudgetingPage';
import { SpendingPage } from 'app/pages/SpendingPage';
import routes from 'app/routes';

export const TrendsPage: React.FC = () => {
  return (
    <div>
      Trends Page
      <Switch>
        <Route path={routes.trends.budgeting}>
          <BudgetingPage />
        </Route>
        <Route path={routes.trends.spending}>
          <SpendingPage />
        </Route>
        <Route path="*">
          <Redirect to={routes.trends.budgeting} />
        </Route>
      </Switch>
    </div>
  );
};
