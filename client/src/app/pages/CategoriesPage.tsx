import styled from '@emotion/styled';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CategoryDetailPage } from 'app/pages/CategoryDetailPage';
import { CategoryAddPage } from 'app/pages/CategoryAddPage';
import { CategoryEditPage } from 'app/pages/CategoryEditPage';
import routes from 'app/routes';
import { rgba } from 'styles/color';

export const CategoriesPage: React.FC = () => {
  return (
    <>
      <Sidebar>sidebar</Sidebar>
      <Page>
        <Switch>
          <Route exact path={routes.category.detail}>
            <CategoryDetailPage />
          </Route>
          <Route path={routes.category.add}>
            <CategoryAddPage />
          </Route>
          <Route path={routes.category.edit}>
            <CategoryEditPage />
          </Route>
          <Route path="*">
            <Redirect
              to={routes.category.detail.replace(':categoryId', '1234')}
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
