import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routing/ROUTES';
import { Button } from '../Button/Button';

import { useStyles } from './MainPage.styles';

export const MainPage = () => {
  const title = 'React';
  const [clicks, setClicks] = useState(0);
  const classes = useStyles();

  const addOneClick = useCallback(() => {
    setClicks(clicks + 1);
  }, [clicks]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Cyberpizza 2077</div>
      <div className={classes.contentWrapper}>
        <h1>{title}</h1>
        <Button caption={`Click ${clicks}`} callback={addOneClick} />
        <Link to={ROUTES.ADMIN}>
          <Button caption="got to admin interface" />
        </Link>
        <div className={classes.products}></div>
      </div>
    </div>
  );
};
