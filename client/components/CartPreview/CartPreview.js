import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartService } from '../../services/cartService';
import { cartSelector } from '../../store/selectors';
import { Button } from '../Button/Button';
import { useStyles } from './CartPreview.styles';
import { clearCart, setCart } from '../../store/actions';

export const CartPreview = () => {
  const cart = useSelector(cartSelector);
  const classes = useStyles();
  const dispatch = useDispatch();

  const total = useMemo(() => {
    let qty = 0;
    let price = 0;
    if (cart.products) {
      cart.products.forEach(a => {
        if (typeof a.quantity === 'number') {
          qty += a.quantity;
        }
        if (typeof a.price === 'number') {
          price += a.price * a.quantity;
        }
      });
    }
    return { price, qty };
  }, [cart]);

  const productsList = useMemo(() => {
    if (cart.products) {
      return cart.products.map(product => (
        <div key={product.toString()} className={classes.product}>
          <div className={classes.shortInfo}>{`${product.name} ${product.quantity}`}</div>
          <Button
            caption="-"
            callback={() =>
              cartService
                .delProductFromCart('5fdc995d15b31f2f3c4630e3', product.product, 1)
                .then(data => dispatch(setCart(data)))
            }
          />
          <Button
            caption="+"
            callback={() =>
              cartService
                .addProductToCart('5fdc995d15b31f2f3c4630e3', product.product, 1, product.name, product.price)
                .then(data => dispatch(setCart(data)))
            }
          />
        </div>
      ));
    }
  }, [cart, classes, dispatch]);

  return (
    <div className={classes.wrapper}>
      <h6>Cart</h6>
      {productsList}
      <div>{`${total.qty} product with overall cost ${total.price}`}</div>
      <Button
        caption="Empty cart"
        callback={() => dispatch(clearCart(cartService.clearOne('5fdc995d15b31f2f3c4630e3')))}
      />
      <Button caption="Show cart" callback="" />
    </div>
  );
};
