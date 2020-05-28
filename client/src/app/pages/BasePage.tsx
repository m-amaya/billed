import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { SummaryPage } from 'app/pages/SummaryPage';
import { TrendsPage } from 'app/pages/TrendsPage';
import { SettingsPage } from 'app/pages/SettingsPage';
import routes from 'app/routes';

export const BasePage: React.FC = () => {
  return (
    <div>
      Base Page
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
    </div>
  );
};
