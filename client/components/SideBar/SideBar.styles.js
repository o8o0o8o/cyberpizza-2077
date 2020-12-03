import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    height: '100vh',
    fontSize: '50px',
    backgroundColor: 'red',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'san-serif',
  },
});
