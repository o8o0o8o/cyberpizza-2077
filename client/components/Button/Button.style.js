import { createUseStyles } from 'react-jss';

import { MAIN_COLOR } from '../../assets/theme/COLORS';
import { BUTTON_WIDTH } from '../../assets/theme/SIZES';
import { BUTTON_HEIGHT } from '../../assets/theme/SIZES';

const k = parseFloat(BUTTON_WIDTH) / 200;

export const useStyles = createUseStyles({
  btn: {
    border: 'none',
    padding: '0.25em 0.75em',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    textAlign: 'center',
    fontWeight: '900',
    borderRadius: '8px',
    backgroundColor: MAIN_COLOR,
    boxShadow: `${12 * k}px ${12 * k}px ${16 * k}px 0 rgba(0, 0, 0, 0.25), -${8 * k}px -${8 * k}px ${
      12 * k
    }px 0 rgba(255, 255, 255, 0.3)`,
    transition: '0.4s all ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FF8EF2',
      boxShadow: '0 3px 5px #FF8EF2',
    },
    '&:focus': {
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      backgroundColor: '#D5CE00',
      boxShadow: `inset ${6 * k}px ${6 * k}px ${10 * k}px 0 rgba(0, 0, 0, 0.2), inset -${6 * k}px -${6 * k}px ${
        10 * k
      }px 0 rgba(255, 255, 255, 0.5)`,
    },
  },
});
