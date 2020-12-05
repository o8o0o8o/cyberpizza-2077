import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routing/ROUTES';
import { useStyles } from './SideBar.styles';

export const SideBar = () => {
  const classes = useStyles();

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
    </div>
  );
};
