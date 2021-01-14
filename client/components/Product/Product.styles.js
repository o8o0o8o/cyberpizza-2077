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
    border: '1px solid black',
  },
  img: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
});
