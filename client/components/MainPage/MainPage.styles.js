import { createUseStyles } from 'react-jss';

import { MAIN_COLOR } from '../../assets/theme/COLORS';

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
    backgroundColor: MAIN_COLOR,
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
    fontFamily: 'cyberpunk',
  },
  products: {
    maxWidth: '80%',
    minWidth: '300px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '150px',
  },
  controls: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
