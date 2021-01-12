import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartSelector, productsSelector } from '../../store/selectors';
import { productsService } from '../../services/productsService';
import { cartService } from '../../services/cartService';
import { setCart, setProducts } from '../../store/actions';
import { Product } from '../Product/Product';
import { useStyles } from './MainPage.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ROUTES } from '../../routing/ROUTES';

export const MainPage = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cart = useSelector(cartSelector);

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
    cartService.getCartById('5fdc995d15b31f2f3c4630e3').then(data => dispatch(setCart(data)));
  }, [dispatch]);

  const putProductInCart = useCallback(
    productId => {
      cartService.addProductToCart(cart._id, productId, 1).then(data => dispatch(setCart(data)));
    },
    [cart, dispatch],
  );

  const listOfProducts = useMemo(
    () =>
      products.map(a => (
        <Product
          key={a.toString()}
          price={a.price}
          description={a.description}
          image={a.image}
          weight={a.weight}
          category={a.category}
          putProductInCart={putProductInCart}
          id={a._id}
          caption="Add to cart"
        />
      )),
    [products, putProductInCart],
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Link to={ROUTES.ADMIN}>
          <Button caption="got to admin interface" callback={''} />
        </Link>
        Cyberpizza 2077
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.products}>{listOfProducts}</div>
      </div>
    </div>
  );
};
