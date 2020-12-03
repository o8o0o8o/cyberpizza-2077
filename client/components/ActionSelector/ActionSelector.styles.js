import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  box: {
    width: '300px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
    position: 'absolute',
    backgroundColor: 'yellow',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
