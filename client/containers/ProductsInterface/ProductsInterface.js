import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
    categoriesService.getAll().then(data => dispatch(setCategories(data)));
  }, [dispatch]);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const listOfProducts = useMemo(() => {
    return products.map(a => {
      return <AdminItem key={a.toString()} obj={a} deleteCallback={() => productsService.deleteOne(a._id)} />;
    });
  }, [products]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
      {showModal && <ModalWindow callback={toggleShowModal} />}
      <div className={classes.table}>{listOfProducts}</div>
      <Button caption="Make a new request" callback={toggleShowModal} />
    </div>
  );
};
