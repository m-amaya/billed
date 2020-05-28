import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MerchantDetailPage } from 'app/pages/MerchantDetailPage';
import { MerchantAddPage } from 'app/pages/MerchantAddPage';
import { MerchantEditPage } from 'app/pages/MerchantEditPage';
import routes from 'app/routes';
import { rgba } from 'styles/color';

export const MerchantsPage: React.FC = () => {
  return (
    <>
      <Sidebar>sidebar</Sidebar>
      <Page>
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
