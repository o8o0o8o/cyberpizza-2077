import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form: {
    width: '100%',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    maxWidth: '60vw',
    maxHeight: '100%',
    display: 'flex',
    position: 'absolute',
    margin: '0 auto',
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
