import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { productsSelector } from '../../store/selectors';
import { productsService } from '../../services/productsService';
import { categoriesService } from '../../services/categoriesService';
import { setCategories, setProducts } from '../../store/actions';
import { TableHeader } from '../../components/TableHeader/TableHeader';
import { findValues } from '../../util/findValues';

export const ProductsInterface = () => {
  const [showModal, setShowModal] = useState(null);
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
    [dispatch, input, method],
  );

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  const listOfProducts = useMemo(
    () =>
      products.map(a => (
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
      )),
    [dispatch, handleMethodChange, input, products, submit],
  );

  return (
    <div>
      <SideBar toggleShowModal={toggleShowModal} />
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
      <TableHeader input={input} />
      {listOfProducts}
    </div>
  );
};
