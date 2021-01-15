import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import { productsSelector } from '../../store/selectors';
import { productsService } from '../../services/productsService';
import { cartService } from '../../services/cartService';
import { setCart, setProducts } from '../../store/actions';
import { Product } from '../Product/Product';
import { useStyles } from './MainPage.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { ROUTES } from '../../routing/ROUTES';
import { CartPreview } from '../CartPreview/CartPreview';

export const MainPage = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cartID = Cookies.get('cartID');

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
    cartService.getCartById(cartID).then(data => dispatch(setCart(data)));
  }, [cartID, dispatch]);

  const putProductInCart = useCallback(
    (productId, name, price) => {
      cartService.addProductToCart(cartID, productId, 1, name, price).then(data => dispatch(setCart(data)));
    },
    [cartID, dispatch],
  );

  const listOfProducts = useMemo(
    () =>
      products.map(a => (
        <Product
          key={a.toString()}
          price={a.price}
          image={a.image}
          weight={a.weight}
          category={a.category}
          putProductInCart={putProductInCart}
          id={a._id}
          name={a.name}
          caption="Add to cart"
        />
      )),
    [products, putProductInCart],
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Cyberpizza 2077</div>
      <div className={classes.contentWrapper}>
        <div className={classes.products}>{listOfProducts}</div>
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
