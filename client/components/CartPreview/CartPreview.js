import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { cartService } from '../../services/cartService';

import { cartSelector } from '../../store/selectors';
import { Button } from '../Button/Button';
import { useStyles } from './CartPreview.styles';

export const CartPreview = () => {
  const cart = useSelector(cartSelector);
  const classes = useStyles();

  const qtyOfProductsInCart = useMemo(() => {
    let qty = 0;
    if (cart.products) {
      cart.products.forEach(a => {
        if (typeof a.quantity === 'number') {
          qty += a.quantity;
        }
      });
    }
    return qty;
  }, [cart]);

  return (
    <div className={classes.wrapper}>
      <h6>Cart</h6>
      {qtyOfProductsInCart}
      <Button caption="Empty cart" callback={() => cartService.clearOne('5fdc995d15b31f2f3c4630e3')} />
    </div>
  );
};
