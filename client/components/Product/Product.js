import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Product.styles';
import { Button } from '../Button/Button';

export const Product = ({ price, description, image, weight, category, putProductInCart, caption, id, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>{`Name ${name}`}</div>
      <div>{`Price ${price}$`}</div>
      <div>{`Description ${description}`}</div>
      <img className={classes.img} src={image} alt="pizza image" />
      <div>{`Weight ${weight}`}</div>
      <div>{`Category ${category}`}</div>
      <Button caption={caption} callback={() => putProductInCart(id, name, price)} />
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  weight: PropTypes.number,
  category: PropTypes.string,
  putProductInCart: PropTypes.func.isRequired,
  caption: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
