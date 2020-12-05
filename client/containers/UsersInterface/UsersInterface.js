import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './UsersInterface.styles';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Button } from '../../components/Button/Button';
import { usersService } from '../../services/usersService';
import { setUsers } from '../../store/actions';
import { usersSelector } from '../../store/selectors';

export const UsersInterface = () => {
  const [showModal, setShowModal] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const input = ['name', 'password', 'email', 'isAdmin', 'isActive'];
  const methods = ['POST', 'PUT'];
  const methodSelector = useRef();
  const form = useRef();
  const [method, setMethod] = useState(methods[0]);
  const users = useSelector(usersSelector);

  useEffect(() => {
    usersService.getAll().then(data => dispatch(setUsers(data)));
  }, [dispatch]);

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
      switch (method) {
        case 'POST':
          usersService.createOne(findValues(form, input));
          break;
        case 'PUT':
          usersService.updateOne(findValues(form, input));
          break;
      }
      usersService.getAll().then(data => dispatch(setUsers(data)));
    },
    [dispatch, findValues, input, method],
  );

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  const listOfProducts = useMemo(() => {
    return users.map(a => {
      return (
        <AdminItem
          key={a.toString()}
          obj={a}
          relations=""
          form={form}
          submit={submit}
          input={input}
          methods={['PUT']}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
          deleteCallback={() => {
            usersService.deleteOne(a._id);
            usersService.getAll().then(data => dispatch(setUsers(data)));
          }}
        />
      );
    });
  }, [dispatch, handleMethodChange, input, submit, users]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
      {showModal && (
        <ModalWindow
          relations="users"
          form={form}
          closeWindow={toggleShowModal}
          submit={submit}
          input={input}
          methods={methods}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
        />
      )}
      <div className={classes.table}>{listOfProducts}</div>
      <Button caption="Make a new request" callback={toggleShowModal} />
    </div>
  );
};
