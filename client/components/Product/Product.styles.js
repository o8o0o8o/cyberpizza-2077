import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: 300,
    height: 300,
    margin: 'auto',
  },
  img: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
});