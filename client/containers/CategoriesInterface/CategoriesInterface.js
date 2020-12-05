import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './CategoriesInterface.styles';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Button } from '../../components/Button/Button';
import { categoriesSelector } from '../../store/selectors';
import { categoriesService } from '../../services/categoriesService';
import { setCategories } from '../../store/actions';

export const CategoriesInterface = () => {
  const [showModal, setShowModal] = useState(null);
  const classes = useStyles();
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const input = ['name'];
  const methods = ['POST', 'PUT'];
  const methodSelector = useRef();
  const form = useRef();
  const [method, setMethod] = useState(methods[0]);

  useEffect(() => {
    categoriesService.getAll().then(data => dispatch(setCategories(data)));
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
          categoriesService.createOne(findValues(form, input));
          break;
        case 'PUT':
          categoriesService.updateOne(findValues(form, input));
          break;
      }
      categoriesService.getAll().then(data => dispatch(setCategories(data)));
    },
    [dispatch, findValues, input, method],
  );

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  const listOfCategories = useMemo(() => {
    return categories.map(a => {
      return (
        <AdminItem
          key={a.toString()}
          obj={a}
          relations="products"
          form={form}
          submit={submit}
          input={input}
          methods={['PUT']}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
          deleteCallback={() => {
            categoriesService.deleteOne(a._id);
            categoriesService.getAll().then(data => dispatch(setCategories(data)));
          }}
        />
      );
    });
  }, [categories, dispatch, handleMethodChange, input, submit]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
      {showModal && (
        <ModalWindow
          relations="products"
          form={form}
          closeWindow={toggleShowModal}
          submit={submit}
          input={input}
          methods={methods}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
        />
      )}
      <div className={classes.table}>{listOfCategories}</div>
      <Button caption="Make a new request" callback={toggleShowModal} />
    </div>
  );
};
