import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './adminPage.styles';
import { setCategories, setProducts } from '../../store/actions';
import { productsService } from '../../services/productsService';
import { categoriesService } from '../../services/categoriesService';

export const AdminPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    productsService.getAll().then(data => dispatch(setProducts(data)));
    categoriesService.getAll().then(data => dispatch(setCategories(data)));
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <SideBar />
    </div>
  );
};
