import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ActionSelector.styles';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const ActionSelector = ({ callback, obj }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.box}>
      {showModal && <ModalWindow obj={obj} callback={callback} />}
      <select>
        <option selected value="PUT">
          Update
        </option>
        <option value="DELETE">Delete </option>
      </select>
      <button onClick={() => setShowModal(!showModal)}>Submit</button>
      <button className={classes.close} onClick={() => callback()}>
        Close
      </button>
    </div>
  );
};

ActionSelector.propTypes = {
  callback: PropTypes.func.isRequired,
  obj: PropTypes.object.isRequired,
};
