import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Product.styles';
import { Button } from '../Button/Button';

export const Product = ({ price, image, weight, category, putProductInCart, caption, id, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>{name}</div>
      <div>{`${price}$`}</div>
      <img className={classes.img} src={image} alt="pizza image" />
      <div>{`Weight ${weight}kg`}</div>
      <div>{`Category ${category}`}</div>
      <Button caption={caption} callback={() => putProductInCart(id, name, price)} />
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.string,
  image: PropTypes.string,
  weight: PropTypes.number,
  category: PropTypes.string,
  putProductInCart: PropTypes.func.isRequired,
  caption: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
