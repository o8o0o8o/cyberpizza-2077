import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './AdminItem.styles';
import { Button } from '../Button/Button';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const AdminItem = ({
  obj,
  deleteCallback,
  selectedMethod,
  submit,
  form,
  input,
  methods,
  methodSelector,
  handleMethodChange,
  relations,
}) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className={classes.wrapper}>
      {showModal && (
        <ModalWindow
          obj={obj}
          callback={toggleShowModal}
          selectedMethod={selectedMethod}
          relations={relations}
          form={form}
          closeWindow={toggleShowModal}
          submit={submit}
          input={input}
          methods={methods}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
        />
      )}
      <div className={classes.product}>
        <div>{`${obj.name}`}</div>
        <div className={classes.btnWrapper}>
          <Button caption="Delete" callback={deleteCallback} />
          <Button caption="Update" callback={toggleShowModal} />
        </div>
      </div>
    </div>
  );
};

AdminItem.propTypes = {
  obj: PropTypes.object.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  updateCallback: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
  selectedMethod: PropTypes.string,
  submit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  methods: PropTypes.array.isRequired,
  input: PropTypes.array.isRequired,
  methodSelector: PropTypes.any.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  relations: PropTypes.string.isRequired,
};
