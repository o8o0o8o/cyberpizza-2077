import React from 'react';

import Cookies from 'js-cookie';

import { useStyles } from './DrinksPage.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ROUTES } from '../../routing/ROUTES';
import { CartPreview } from '../CartPreview/CartPreview';

export const DrinksPage = () => {
  const classes = useStyles();
  const cartID = Cookies.get('cartID');

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Cyberpizza 2077</div>
      <div className={classes.contentWrapper}>
        <div className={classes.products}>Sorry. No drinks were added yet.</div>
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
          <Button caption="desserts" />
        </Link>
        <Link to={ROUTES.DRINKS}>
          <Button caption="drinks" />
        </Link>
      </div>
    </div>
  );
};
