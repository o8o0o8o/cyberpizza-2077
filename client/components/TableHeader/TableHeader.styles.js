import { createUseStyles } from 'react-jss';

import { ADMIN_SIDEBAR_WIDTH, ADMIN_CONTROLS_WIDTH } from '../../assets/theme/SIZES';
import { TABLE_FONT } from '../../assets/theme/FONTS';

// eslint-disable-next-line no-unused-vars
export const useStyles = createUseStyles(props => ({
  tableHeader: {
    width: '100%',
    display: 'flex',
    margin: `0 auto 0 ${ADMIN_SIDEBAR_WIDTH}`,
    fontFamily: TABLE_FONT,
  },
  field: {
    width: props => `calc((100% - ${ADMIN_SIDEBAR_WIDTH} - ${ADMIN_CONTROLS_WIDTH})/${props.length})`,
    textAlign: 'center',
  },
  offset: {
    width: ADMIN_CONTROLS_WIDTH,
  },
}));
