import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },
  header: {
    position: 'fixed',
    top: 0,
    margin: '0 auto',
    width: '80vw',
    height: '100px',
    backgroundColor: 'purple',
    color: 'yellow',
    fontSize: '70px',
    textAlign: 'center',
    paddingTop: '50px',
  },
  products: {
    display: 'flex',
    width: '80vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
