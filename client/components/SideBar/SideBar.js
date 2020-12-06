import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ROUTES } from '../../routing/ROUTES';
import { usersService } from '../../services/usersService';
import { Button } from '../Button/Button';
import { useStyles } from './SideBar.styles';

export const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    usersService.logout();
    history.push({ pathname: ROUTES.MAIN });
  };

  return (
    <div className={classes.menu}>
      <Link to={ROUTES.CATEGORIES_INTERFACE}>
        <a className={classes.link}>Categories</a>
      </Link>
      <Link to={ROUTES.PRODUCTS_INTERFACE}>
        <a className={classes.link}>Products</a>
      </Link>
      <Link to={ROUTES.USERS_INTERFACE}>
        <a className={classes.link}>Users</a>
      </Link>
      <Button caption="LOGOUT" callback={logout} />
    </div>
  );
};
