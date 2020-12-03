import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  table: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
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
