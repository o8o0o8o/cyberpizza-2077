import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './CategoriesInterface.styles';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Button } from '../../components/Button/Button';
import { categoriesSelector } from '../../store/selectors';
import { productsService } from '../../services/productsService';
import { categoriesService } from '../../services/categoriesService';
import { setCategories, setProducts } from '../../store/actions';

export const CategoriesInterface = () => {
  const [showModal, setShowModal] = useState(null);
  const classes = useStyles();
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
    categoriesService.getAll().then(data => dispatch(setCategories(data)));
  }, [dispatch, categories]);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const listOfCategories = useMemo(() => {
    return categories.map(a => {
      return <AdminItem key={a.toString()} obj={a} deleteCallback={() => categoriesService.deleteOne(a._id)} />;
    });
  }, [categories]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
      {showModal && <ModalWindow callback={toggleShowModal} />}
      <div className={classes.table}>{listOfCategories}</div>
      <Button caption="Make a new request" callback={toggleShowModal} />
    </div>
  );
};
