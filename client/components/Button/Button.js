import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Button.style';

export const Button = ({ caption, callback }) => {
  const classes = useStyles();

  return (
    <button className={classes.btn} onClick={e => callback(e)}>
      {caption}
    </button>
  );
};

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
