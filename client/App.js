import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { CategoriesInterface } from './containers/CategoriesInterface/CategoriesInterface';
import { AdminPage } from './components/AdminPage/AdminPage';
import { ROUTES } from './routing/ROUTES';
import { ProductsInterface } from './containers/ProductsInterface/ProductsInterface';
import { UsersInterface } from './containers/UsersInterface/UsersInterface';
import { MainPage } from './components/MainPage/MainPage';
import { AdminRoute } from './routing/AdminRoute';
import { LoginPage } from './components/LoginPage/LoginPage';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { DessertsPage } from './components/DessertsPage/DessertsPage';

export const App = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AdminRoute exact path={ROUTES.ADMIN} component={AdminPage}></AdminRoute>
          <Route exact path={ROUTES.MAIN} component={MainPage}></Route>
          <Route exact path={ROUTES.DESSERTS} component={DessertsPage}></Route>
          <Route exact path={ROUTES.CREATE_NEW_USER} component={CreateUserPage}></Route>
          <Route exact path={ROUTES.LOGIN} component={LoginPage}></Route>
          <AdminRoute exact path={ROUTES.CATEGORIES_INTERFACE} component={CategoriesInterface}></AdminRoute>
          <AdminRoute exact path={ROUTES.PRODUCTS_INTERFACE} component={ProductsInterface}></AdminRoute>
          <AdminRoute exact path={ROUTES.USERS_INTERFACE} component={UsersInterface}></AdminRoute>
          <Route>
            <Redirect to={ROUTES.MAIN} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
