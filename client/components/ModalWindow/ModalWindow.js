/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ModalWindow.styles';
import { CategoriesSelector } from '../CategoriesSelector/CategoriesSelector';
import { Button } from '../Button/Button';

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
  secondButton,
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
        <div>
          <Button type="submit" callback={submit} caption={submitButtonCaption ? submitButtonCaption : 'Send'} />
          {secondButton ? <Button type="button" callback={secondButton.callback} caption={secondButton.caption} /> : ''}
        </div>
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
      <div className={classes.formWrapper}>
        {myModal}
        <i className={`${classes.close} far fa-window-close`} onClick={() => closeWindow()}></i>
      </div>
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
  secondButton: PropTypes.obj,
};
