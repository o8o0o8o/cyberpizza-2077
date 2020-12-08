import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { usersService } from '../../services/usersService';
import { setUsers } from '../../store/actions';
import { usersSelector } from '../../store/selectors';
import { TableHeader } from '../../components/TableHeader/TableHeader';
import { findValues } from '../../util/findValues';

export const UsersInterface = () => {
  const [showModal, setShowModal] = useState(null);
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
    [dispatch, input, method],
  );

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  const listOfUsers = useMemo(
    () =>
      users.map(a => (
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
      )),
    [dispatch, handleMethodChange, input, submit, users],
  );

  return (
    <div>
      <SideBar toggleShowModal={toggleShowModal} />
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
      <TableHeader input={input} />
      {listOfUsers}
    </div>
  );
};
