import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form: {
    height: '400px',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '0 auto',
    textAlign: 'center',
    zIndex: '10',
  },
  formWrapper: {
    position: 'relative',
    height: '410px',
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '2px 2px 20px grey',
  },
  label: {
    display: 'inline-block',
    width: '150px',
    textAlign: 'right',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
  },
});
