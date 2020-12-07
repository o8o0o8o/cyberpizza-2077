import { createUseStyles } from 'react-jss';

const BTN_WRAPPER_WIDTH = '200px';
const ROW_HEIGHT = '1.5em';

export const useStyles = createUseStyles({
  product: {
    width: '400px',
    height: ROW_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px black solid',
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
  productName: {
    position: 'relative',
    width: `calc(100% - ${BTN_WRAPPER_WIDTH} - 10px)`,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&::before': {},
    '&:hover': {
      height: ROW_HEIGHT,
      overflow: 'visible',
      backgroundColor: 'white',
      position: 'absolute',
    },
  },
  btnWrapper: {
    width: BTN_WRAPPER_WIDTH,
  },
});
