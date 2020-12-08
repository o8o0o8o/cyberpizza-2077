import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routing/ROUTES';
import { usersService } from '../../services/usersService';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import { useStyles } from './LoginPage.styles';

export const LoginPage = () => {
  const input = ['password', 'email'];
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
      usersService.login(findValues(form, input)).then(() => {
        history.push({ pathname: ROUTES.ADMIN });
      });
    },
    [findValues, history, input],
  );

  const goToCreateUserPage = useCallback(() => {
    history.push({ pathname: ROUTES.CREATE_NEW_USER });
  }, [history]);

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
        submitButtonCaption="Login"
        closeWindow={closeWindow}
        secondButton={{ callback: goToCreateUserPage, caption: 'Create One' }}
      />
    </div>
  );
};
