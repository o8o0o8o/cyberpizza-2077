import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './TableHeader.styles';

export const TableHeader = ({ input }) => {
  const classes = useStyles({ length: input.length });

  const columns = useMemo(() => {
    return input.map(a => (
      <div className={classes.field} key={a}>
        {a}
      </div>
    ));
  }, [classes, input]);

  return (
    <div className={classes.tableHeader}>
      {columns}
      <div className={classes.offset}></div>
    </div>
  );
};

TableHeader.propTypes = {
  input: PropTypes.array.isRequired,
};
