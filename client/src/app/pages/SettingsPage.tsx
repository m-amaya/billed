import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AccountsPage } from 'app/pages/AccountsPage';
import { IncomePage } from 'app/pages/IncomePage';
import { MerchantsPage } from 'app/pages/MerchantsPage';
import { CategoriesPage } from 'app/pages/CategoriesPage';
import routes from 'app/routes';

export const SettingsPage: React.FC = () => {
  return (
    <Page>
      <Switch>
        <Route path={routes.settings.accounts}>
          <AccountsPage />
        </Route>
        <Route path={routes.settings.income}>
          <IncomePage />
        </Route>
        <Route path={routes.settings.merchants}>
          <MerchantsPage />
        </Route>
        <Route path={routes.settings.category}>
          <CategoriesPage />
        </Route>
        <Route path="*">
          <Redirect to={routes.settings.accounts} />
        </Route>
      </Switch>
    </Page>
  );
};

const Page = styled.div({
  display: 'flex',
  height: '100%',
});
