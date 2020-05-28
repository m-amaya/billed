import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AccountDetailPage } from 'app/pages/AccountDetailPage';
import { AccountAddPage } from 'app/pages/AccountAddPage';
import { AccountEditPage } from 'app/pages/AccountEditPage';
import routes from 'app/routes';
import { rgba } from 'styles/color';

export const AccountsPage: React.FC = () => {
  return (
    <>
      <Sidebar>sidebar</Sidebar>
      <Page>
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
            <Redirect
              to={routes.accounts.detail.replace(':accountId', '1234')}
            />
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
