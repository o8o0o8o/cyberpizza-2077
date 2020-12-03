import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
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
  label: {
    display: 'inline-block',
    width: '150px',
    textAlign: 'right',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
