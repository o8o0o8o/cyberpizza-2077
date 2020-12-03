import React from 'react';

import { SideBar } from '../../components/SideBar/SideBar';
import { useStyles } from './adminPage.styles';

export const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SideBar />
    </div>
  );
};
