import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartService } from '../../services/cartService';
import { cartSelector } from '../../store/selectors';
import { Button } from '../Button/Button';
import { useStyles } from './CartPreview.styles';
import { clearCart } from '../../store/actions';

export const CartPreview = () => {
  const cart = useSelector(cartSelector);
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const productsList = useMemo(() => {
    if (cart.products) {
      return cart.products.map(product => (
        <div key={product.toString()}>
          <div>{`${product.name} ${product.quantity}`}</div>
        </div>
      ));
    }
  }, [cart]);

  return (
    <div className={classes.wrapper}>
      <h6>Cart</h6>
      <div>{`Quantity ${qtyOfProductsInCart}`}</div>
      {productsList}
      <Button
        caption="Empty cart"
        callback={() => dispatch(clearCart(cartService.clearOne('5fdc995d15b31f2f3c4630e3')))}
      />
      <Button caption="Show cart" callback="" />
    </div>
  );
};
