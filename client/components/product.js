import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './product.styles';

export const Product = ({ name, price, weight, description, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.product}>
      <h4>{`name ${name}`}</h4>
      <h5>{`price ${price}`}</h5>
      <h6>{`weight ${weight}`}</h6>
      <p>{`description ${description}`}</p>
      <img className={classes.img} src={image} />
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
