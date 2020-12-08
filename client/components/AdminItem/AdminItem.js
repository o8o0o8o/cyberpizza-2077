import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './AdminItem.styles';
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
  const classes = useStyles({ length: input.length });
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const values = useMemo(() => {
    return input.map(a => (
      <div className={classes.field} key={a}>
        {obj[a].toString()}
      </div>
    ));
  }, [classes, input, obj]);

  return (
    <div className={classes.product}>
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
      {values}
      <div className={classes.btnWrapper}>
        <i className={`fas fa-trash-alt ${classes.icon} ${classes.delete}`} onClick={deleteCallback}></i>
        <i className={`fas fa-edit ${classes.edit} ${classes.icon}`} onClick={toggleShowModal}></i>
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
