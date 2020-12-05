import React from 'react';

import { SideBar } from '../SideBar/SideBar';
import { useStyles } from './AdminPage.styles';

export const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SideBar />
    </div>
  );
};
