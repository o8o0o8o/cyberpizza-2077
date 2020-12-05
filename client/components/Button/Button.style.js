import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  btn: {
    border: 'none',
    padding: '0.25em 0.75em',
    minWidth: '100px',
    maxWidth: '310px',
    Height: '44px',
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: '#F335FF',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.18)',
    transition: '220ms background-color box-shadow outline-color outline-style ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FF8EF2',
      boxShadow: '0 3px 5px #FF8EF2',
    },
    '&:focus': {
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      boxShadow: '1px 2px 3px 4px #690079',
      backgroundColor: '#A30099',
    },
  },
});
