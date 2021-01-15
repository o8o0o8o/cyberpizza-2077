import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: 300,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: '15px',
    backgroundColor: 'gold',
    boxShadow: '3px 3px 15px 3px #917700',
  },
  img: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
});
