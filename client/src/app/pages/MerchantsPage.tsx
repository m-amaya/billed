import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MerchantDetailPage } from 'app/pages/MerchantDetailPage';
import { MerchantAddPage } from 'app/pages/MerchantAddPage';
import { MerchantEditPage } from 'app/pages/MerchantEditPage';
import routes from 'app/routes';

export const MerchantsPage: React.FC = () => {
  return (
    <div>
      Merchants Page
      <Switch>
        <Route exact path={routes.merchants.detail}>
          <MerchantDetailPage />
        </Route>
        <Route path={routes.merchants.add}>
          <MerchantAddPage />
        </Route>
        <Route path={routes.merchants.edit}>
          <MerchantEditPage />
        </Route>
        <Route path="*">
          <Redirect
            to={routes.merchants.detail.replace(':merchantId', '1234')}
          />
        </Route>
      </Switch>
    </div>
  );
};
