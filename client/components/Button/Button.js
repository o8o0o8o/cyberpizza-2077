import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Button.style';

export const Button = ({ caption, callback }) => {
  const classes = useStyles();

  return (
    <button className={classes.btn} onClick={() => callback()}>
      {caption}
    </button>
  );
};

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
