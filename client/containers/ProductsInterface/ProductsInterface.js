import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { AdminItem } from '../../components/AdminItem/AdminItem';
import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './ProductsInterface.styles';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Button } from '../../components/Button/Button';
import { productsSelector } from '../../store/selectors';

export const ProductsInterface = () => {
  const [showModal, setShowModal] = useState(null);
  const classes = useStyles();
  const products = useSelector(productsSelector);

  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const listOfProducts = useMemo(() => {
    return products.map(a => {
      return <AdminItem key={a.toString()} obj={a} />;
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
