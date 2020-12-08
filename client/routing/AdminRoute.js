import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import { ROUTES } from './ROUTES';

export const AdminRoute = ({ component: Component }) => (
  <Route
    render={() => {
      const user = Cookies.get('user');
      return user ? <Component /> : <Redirect to={{ pathname: ROUTES.LOGIN }} />;
    }}
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
