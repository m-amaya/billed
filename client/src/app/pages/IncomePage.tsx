import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { IncomeDetailPage } from 'app/pages/IncomeDetailPage';
import { IncomeAddPage } from 'app/pages/IncomeAddPage';
import { IncomeEditPage } from 'app/pages/IncomeEditPage';
import routes from 'app/routes';

export const IncomePage: React.FC = () => {
  return (
    <div>
      Income Page
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
    </div>
  );
};
