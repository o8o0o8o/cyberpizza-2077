import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../routing/ROUTES';
import { usersService } from '../../services/usersService';
import { Button } from '../Button/Button';
import { useStyles } from './SideBar.styles';

export const SideBar = ({ toggleShowModal }) => {
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
      <Button caption="Make a new request" callback={toggleShowModal} />
      <Button caption="LOGOUT" callback={logout} />
      <Link to={ROUTES.MAIN}>
        <Button caption="Go to main" callback={''} />
      </Link>
    </div>
  );
};

SideBar.propTypes = {
  toggleShowModal: PropTypes.func.isRequired,
};
