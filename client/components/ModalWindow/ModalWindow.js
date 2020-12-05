import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ModalWindow.styles';
import { CategoriesSelector } from '../CategoriesSelector/CategoriesSelector';

export const ModalWindow = ({
  closeWindow,
  obj,
  selectedMethod,
  submit,
  form,
  input,
  methods,
  methodSelector,
  handleMethodChange,
  relations,
}) => {
  const classes = useStyles();

  const myModal = useMemo(() => {
    return (
      <form className={classes.form} ref={form}>
        <div>
          <label className={classes.label}>Choose a method:</label>
          <select onChange={e => handleMethodChange(e)} ref={methodSelector}>
            {methods.map(a => (
              <option key={a.toString()} value={a} selected={selectedMethod === a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        {input.map(a => (
          <div key={a.toString()}>
            <label className={classes.label}>{a}:</label>
            <input type="text" name={a} placeholder={obj ? obj[a] : ''} />
          </div>
        ))}
        {relations === 'category' ? (
          <div>
            <label className={classes.label}>Select category</label>
            <CategoriesSelector />
          </div>
        ) : (
          <div>
            <label className={classes.label}>Pizzas IDs or names comma separated</label>
            <input type="text" name="products" placeholder={obj ? obj.products : ''} />
          </div>
        )}
        <input type="submit" caption="Make a request" onClick={e => submit(e)} />
      </form>
    );
  }, [
    classes.form,
    classes.label,
    form,
    handleMethodChange,
    input,
    methodSelector,
    methods,
    obj,
    relations,
    selectedMethod,
    submit,
  ]);

  return (
    <div className={classes.wrapper}>
      {myModal}
      <button className={classes.close} onClick={() => closeWindow()}>
        Close
      </button>
    </div>
  );
};

ModalWindow.propTypes = {
  closeWindow: PropTypes.func.isRequired,
  obj: PropTypes.object,
  selectedMethod: PropTypes.string,
  submit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  methods: PropTypes.array.isRequired,
  input: PropTypes.array.isRequired,
  methodSelector: PropTypes.any.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  relations: PropTypes.string.isRequired,
};
