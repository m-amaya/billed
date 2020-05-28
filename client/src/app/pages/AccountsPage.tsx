import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AccountDetailPage } from 'app/pages/AccountDetailPage';
import { AccountAddPage } from 'app/pages/AccountAddPage';
import { AccountEditPage } from 'app/pages/AccountEditPage';
import routes from 'app/routes';

export const AccountsPage: React.FC = () => {
  return (
    <div>
      Accounts Page
      <Switch>
        <Route exact path={routes.accounts.detail}>
          <AccountDetailPage />
        </Route>
        <Route path={routes.accounts.add}>
          <AccountAddPage />
        </Route>
        <Route path={routes.accounts.edit}>
          <AccountEditPage />
        </Route>
        <Route path="*">
          <Redirect to={routes.accounts.detail.replace(':accountId', '1234')} />
        </Route>
      </Switch>
    </div>
  );
};
