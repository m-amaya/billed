import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Header } from 'app/components/nav/Header';
import { TabNav } from 'app/components/nav/TabNav';
import { SummaryPage } from 'app/pages/SummaryPage';
import { TrendsPage } from 'app/pages/TrendsPage';
import { SettingsPage } from 'app/pages/SettingsPage';
import routes from 'app/routes';
import bp from 'styles/breakpoint';
import { rgba } from 'styles/color';

export const BasePage: React.FC = () => {
  return (
    <Page>
      <NavBar>
        <Header />
        <TabNav />
      </NavBar>
      <Switch>
        <Route path={routes.page.summary}>
          <SummaryPage />
        </Route>
        <Route path={routes.page.trends}>
          <TrendsPage />
        </Route>
        <Route path={routes.page.settings}>
          <SettingsPage />
        </Route>
        <Route path="*">
          <Redirect to={routes.page.summary} />
        </Route>
      </Switch>
    </Page>
  );
};

const Page = styled.div({
  paddingTop: 140,
  height: '100%',
  minWidth: bp.tablet,
  width: '100%',
});

const NavBar = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#FFFFFF',
  boxShadow: `0 2px 4px ${rgba('#B2B2B2', 0.5)}`,
  minWidth: bp.tablet,
  width: '100%',
});
