import React from 'react';

import Cookies from 'js-cookie';

import { useStyles } from './DessertsPage.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ROUTES } from '../../routing/ROUTES';
import { CartPreview } from '../CartPreview/CartPreview';

export const DessertsPage = () => {
  const classes = useStyles();
  const cartID = Cookies.get('cartID');

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Cyberpizza 2077</div>
      <div className={classes.contentWrapper}>
        <div className={classes.products}>Sorry</div>
      </div>
      <div className={classes.cart}>
        <Link to={ROUTES.ADMIN}>
          <Button caption="got to admin interface" />
        </Link>
        <CartPreview cartID={cartID} />
      </div>
      <div className={classes.menu}>
        <Link to={ROUTES.MAIN}>
          <Button caption="pizza" />
        </Link>
        <Link to={ROUTES.DESSERTS}>
          <Button caption="drinks" />
        </Link>
        <Link to={ROUTES.DRINKS}>
          <Button caption="desserts" />
        </Link>
      </div>
    </div>
  );
};
