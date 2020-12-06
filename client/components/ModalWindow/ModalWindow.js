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
  submitButtonCaption,
}) => {
  const classes = useStyles();

  const myModal = useMemo(() => {
    return (
      <form className={classes.form} ref={form}>
        {methodSelector ? (
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
        ) : (
          <div></div>
        )}
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
        ) : relations === 'products' ? (
          <div>
            <label className={classes.label}>Pizzas IDs or names comma separated</label>
            <input type="text" name="products" placeholder={obj ? obj.products : ''} />
          </div>
        ) : (
          <div></div>
        )}
        <button type="submit" onClick={e => submit(e)}>
          {submitButtonCaption ? submitButtonCaption : 'Send'}
        </button>
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
    submitButtonCaption,
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
  methods: PropTypes.array,
  input: PropTypes.array.isRequired,
  methodSelector: PropTypes.any,
  handleMethodChange: PropTypes.func,
  relations: PropTypes.string.isRequired,
  submitButtonCaption: PropTypes.string,
};
