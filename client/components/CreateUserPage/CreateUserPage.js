import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routing/ROUTES';
import { usersService } from '../../services/usersService';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import { useStyles } from './CreateUserPage.styles';

export const CreateUserPage = () => {
  const input = ['password', 'email', 'name', 'isAdmin', 'isActive'];
  const classes = useStyles();
  const form = useRef();
  const history = useHistory();

  const findValues = useCallback(ref => {
    const obj = {};
    Array.from(ref.current).forEach(formEl => {
      if (formEl.name !== undefined && formEl.name !== '') obj[formEl.name] = formEl.value;
    });
    return obj;
  }, []);

  const submit = useCallback(
    e => {
      e.preventDefault();
      usersService.createOne(findValues(form, input)).then(() => {
        history.push({ pathname: ROUTES.ADMIN });
      });
    },
    [findValues, history, input],
  );

  const closeWindow = function () {
    history.push({ pathname: '/' });
  };

  return (
    <div className={classes.wrapper}>
      <ModalWindow
        relations="users"
        form={form}
        submit={submit}
        input={input}
        submitButtonCaption="Create"
        closeWindow={closeWindow}
      />
    </div>
  );
};
