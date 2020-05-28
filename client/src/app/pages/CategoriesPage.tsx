import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CategoryDetailPage } from 'app/pages/CategoryDetailPage';
import { CategoryAddPage } from 'app/pages/CategoryAddPage';
import { CategoryEditPage } from 'app/pages/CategoryEditPage';
import routes from 'app/routes';

export const CategoriesPage: React.FC = () => {
  return (
    <div>
      Categories Page
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
    </div>
  );
};
