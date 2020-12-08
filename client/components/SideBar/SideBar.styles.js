import { createUseStyles } from 'react-jss';

import { ADMIN_SIDEBAR_WIDTH } from '../../assets/theme/SIZES';

export const useStyles = createUseStyles({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    height: '100vh',
    width: ADMIN_SIDEBAR_WIDTH,
    fontSize: '50px',
    backgroundColor: 'red',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'san-serif',
  },
});
