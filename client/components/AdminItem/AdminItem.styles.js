import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  product: {
    maxWidth: '80vw',
    minWidth: '400px',
    height: '1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px black solid',
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },
});
