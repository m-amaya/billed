import styled from '@emotion/styled';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';

import { BasePage } from 'app/pages/BasePage';
import { LoginPage } from 'app/pages/LoginPage';

export const App: React.FC = hot(() => {
  return (
    <RootPage>
      <Switch>
        <Route exact path="/">
          <BasePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </RootPage>
  );
});

const RootPage = styled.div({
  height: '100%',
  width: '100%',
});
