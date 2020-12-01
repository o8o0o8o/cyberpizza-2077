import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useStyles } from './firstPage.styles';
import { Product } from './product';

export const FirstPage = () => {
  const title = 'React with Webpack and Babel';
  const [clicks, setClicks] = useState(0);
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  const addOneClick = useCallback(() => {
    setClicks(clicks + 1);
  }, [clicks]);

  const listOfProducts = useMemo(() => {
    return products.map(a => {
      return (
        <Product
          key={a.toString()}
          name={a.name}
          price={a.price}
          weight={a.weight}
          description={a.description}
          image={a.image}
        />
      );
    });
  }, [products]);

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    fetch('https://cyberpizza-2077.herokuapp.com/api/products')
      .then(data => data.json())
      .then(res => setProducts(res))
      .catch(err => err);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Cyberpizza 2077</div>
      <div className={classes.contentWrapper}>
        <h1>{title}</h1>
        <button onClick={addOneClick}>Click{clicks}</button>
        <div className={classes.products}>{listOfProducts}</div>
      </div>
    </div>
  );
};
