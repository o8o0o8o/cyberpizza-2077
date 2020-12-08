import { createUseStyles } from 'react-jss';

import { ADMIN_SIDEBAR_WIDTH, ADMIN_CONTROLS_WIDTH } from '../../assets/theme/SIZES';
import { TABLE_FONT } from '../../assets/theme/FONTS';

// eslint-disable-next-line no-unused-vars
export const useStyles = createUseStyles(props => ({
  product: {
    width: 'calc(100%)',
    margin: `0 auto 0 ${ADMIN_SIDEBAR_WIDTH}`,
    display: 'flex',
    border: '1px black solid',
    fontFamily: TABLE_FONT,
  },
  btnWrapper: {
    width: ADMIN_CONTROLS_WIDTH,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    color: 'black',
    cursor: 'pointer',
  },
  edit: {
    '&:hover': {
      color: 'green',
    },
  },
  delete: {
    '&:hover': {
      color: 'red',
    },
  },
  field: {
    width: props => `calc((100% - ${ADMIN_SIDEBAR_WIDTH} - ${ADMIN_CONTROLS_WIDTH})/${props.length})`,
    overflowWrap: 'break-word',
    border: '1px red solid',
    textAlign: 'center',
  },
}));
