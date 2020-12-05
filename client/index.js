import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { CategoriesInterface } from './containers/CategoriesInterface/CategoriesInterface';
import { AdminPage } from './components/AdminPage/AdminPage';
import { ROUTES } from './routing/ROUTES';
import './style.css';
import { ProductsInterface } from './containers/ProductsInterface/ProductsInterface';
import { UsersInterface } from './containers/UsersInterface/UsersInterface';
import { store } from './store';
import { MainPage } from './components/MainPage/MainPage';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.ADMIN} component={AdminPage}></Route>
          <Route exact path={ROUTES.MAIN} component={MainPage}></Route>
          <Route exact path={ROUTES.CATEGORIES_INTERFACE} component={CategoriesInterface}></Route>
          <Route exact path={ROUTES.PRODUCTS_INTERFACE} component={ProductsInterface}></Route>
          <Route exact path={ROUTES.USERS_INTERFACE} component={UsersInterface}></Route>
          <Route>
            <Redirect to={ROUTES.MAIN} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);
