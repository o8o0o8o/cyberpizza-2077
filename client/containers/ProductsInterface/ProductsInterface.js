import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './ProductsInterface.styles';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Button } from '../../components/Button/Button';
import { productsSelector } from '../../store/selectors';
import { productsService } from '../../services/productsService';
import { categoriesService } from '../../services/categoriesService';
import { setCategories, setProducts } from '../../store/actions';

export const ProductsInterface = () => {
  const [showModal, setShowModal] = useState(null);
  const classes = useStyles();
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const input = ['name', 'price', 'description', 'weight', 'image'];
  const methods = ['POST', 'PUT'];
  const methodSelector = useRef();
  const form = useRef();
  const [method, setMethod] = useState(methods[0]);

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
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
          productsService.createOne(findValues(form, input));
          break;
        case 'PUT':
          productsService.updateOne(findValues(form, input));
          break;
      }
      productsService.getAll().then(data => dispatch(setProducts(data)));
    },
    [dispatch, findValues, input, method],
  );

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  const listOfProducts = useMemo(() => {
    return products.map(a => {
      return (
        <AdminItem
          key={a.toString()}
          obj={a}
          relations="category"
          form={form}
          submit={submit}
          input={input}
          methods={['PUT']}
          methodSelector={methodSelector}
          handleMethodChange={handleMethodChange}
          deleteCallback={() => {
            productsService.deleteOne(a._id);
            productsService.getAll().then(data => dispatch(setProducts(data)));
          }}
        />
      );
    });
  }, [dispatch, handleMethodChange, input, products, submit]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
      {showModal && (
        <ModalWindow
          relations="category"
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
