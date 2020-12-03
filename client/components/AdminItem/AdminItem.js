import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './AdminItem.styles';
import { Button } from '../Button/Button';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const AdminItem = ({ obj, deleteCallback }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className={classes.product}>
      {showModal && <ModalWindow obj={obj} callback={toggleShowModal} selectedMethod={'PUT'} />}
      <div>{`name ${obj.name}`}</div>
      <div className={classes.btnWrapper}>
        <Button caption="Delete" callback={deleteCallback} />
        <Button caption="Update" callback={toggleShowModal} />
      </div>
    </div>
  );
};

AdminItem.propTypes = {
  obj: PropTypes.object.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  updateCallback: PropTypes.func.isRequired,
};
