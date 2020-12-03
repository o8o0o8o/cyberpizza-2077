import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './AdminItem.styles';
import { ActionSelector } from '../ActionSelector/ActionSelector';
import { Button } from '../Button/Button';

export const AdminItem = ({ obj }) => {
  const classes = useStyles();
  const [showAction, setShowAction] = useState(null);
  const toggleShowAction = useCallback(() => setShowAction(!showAction), [showAction]);

  return (
    <div className={classes.product}>
      <h4>{`name ${obj.name}`}</h4>
      {showAction && <ActionSelector obj={obj} callback={toggleShowAction} />}
      <Button caption="Chose An Action" callback={toggleShowAction} />
    </div>
  );
};

AdminItem.propTypes = {
  obj: PropTypes.object.isRequired,
};
