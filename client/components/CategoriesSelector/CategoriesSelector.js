import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { categoriesSelector } from '../../store/selectors';

export const CategoriesSelector = () => {
  const categories = useSelector(categoriesSelector);

  const selectCategory = useMemo(() => {
    return (
      <select>
        {categories.map(a => (
          <option key={a.toString()} value={a.id}>
            {a.name}
          </option>
        ))}
      </select>
    );
  }, [categories]);

  return <div>{selectCategory}</div>;
};

CategoriesSelector.propTypes = {
  obj: PropTypes.object.isRequired,
};
