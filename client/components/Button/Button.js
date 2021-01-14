import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Button.style';

export const Button = ({ caption, callback, small }) => {
  const classes = useStyles();

  return (
    <button className={small ? `${classes.btn} ${classes.small}` : classes.btn} onClick={callback}>
      {caption}
    </button>
  );
};

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  small: PropTypes.bool,
};
