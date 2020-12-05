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
  label: {
    display: 'inline-block',
    width: '150px',
    textAlign: 'right',
  },
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formWrapper: {
    height: '400px',
    width: '320px',
    display: 'flex',
    position: 'absolute',
    margin: '0 auto',
    top: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: '10',
    backgroundColor: 'blue',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
