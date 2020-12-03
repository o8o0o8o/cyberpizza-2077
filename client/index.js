import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { FirstPage } from './components/firstPage';
import { CategoriesInterface } from './containers/CategoriesInterface/CategoriesInterface';
import { AdminPage } from './containers/AdminPage/adminPage';
import { ROUTES } from './routing/ROUTES';
import './style.css';
import { ProductsInterface } from './containers/ProductsInterface/ProductsInterface';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.ADMIN} component={AdminPage}></Route>
          <Route exact path={ROUTES.MAIN} component={FirstPage}></Route>
          <Route exact path={ROUTES.CATEGORIES_INTERFACE} component={CategoriesInterface}></Route>
          <Route exact path={ROUTES.PRODUCTS_INTERFACE} component={ProductsInterface}></Route>
          <Route>
            <Redirect to={ROUTES.MAIN} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);
