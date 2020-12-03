import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ModalWindow.styles';
import { productsService } from '../../services/productsService';
import { CategoriesSelector } from '../CategoriesSelector/CategoriesSelector';

export const ModalWindow = ({ callback, obj, selectedMethod }) => {
  const classes = useStyles();
  const [method, setMethod] = useState();
  const newName = useRef();
  const newPrice = useRef();
  const newDescription = useRef();
  const newWeight = useRef();
  const newImage = useRef();
  const select = useRef();

  const handleMethodChange = useCallback(e => setMethod(e.target.value), []);

  useEffect(() => {
    newName.current.value = (obj && obj.name) || 'name';
    newPrice.current.value = (obj && obj.price) || 'price';
    newDescription.current.value = (obj && obj.description) || 'description';
    newWeight.current.value = (obj && obj.weight) || 'weight';
    newImage.current.value = (obj && obj.image) || 'link';
    select.current.value = selectedMethod || 'GET';
  }, [obj, selectedMethod]);

  const submit = useCallback(
    e => {
      e.preventDefault();
      switch (method) {
        case 'GET':
          productsService.getOne();
          break;
        case 'POST':
          productsService.createOne({
            name: newName.current.value,
            price: newPrice.current.value,
            description: newDescription.current.value,
            weight: newWeight.current.value,
          });
          break;
        case 'PUT':
          productsService.updateOne();
          break;
        case 'DELETE':
          productsService.deleteOne();
          break;
      }
    },
    [method],
  );

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <div>
          <label className={classes.label}>Choose a method:</label>
          <select onChange={e => handleMethodChange(e)} ref={select}>
            <option selected value="GET">
              GET
            </option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div>
          <label className={classes.label}>Name:</label>
          <input type="text" name="name" ref={newName} />
        </div>
        <div>
          <label className={classes.label}>Price:</label>
          <input type="text" name="price" ref={newPrice} />
        </div>
        <div>
          <label className={classes.label}>Description:</label>
          <input type="text" name="description" ref={newDescription} />
        </div>
        <div>
          <label className={classes.label}>Weight:</label>
          <input type="text" name="weight" ref={newWeight} />
        </div>
        <div>
          <label className={classes.label}>Image:</label>
          <input type="text" name="image" ref={newImage} />
        </div>
        <div>
          <label className={classes.label}>Select category</label>
          <CategoriesSelector />
        </div>
        <input type="submit" caption="Make a request" onClick={e => submit(e)} />
      </form>
      <button className={classes.close} onClick={() => callback()}>
        Close
      </button>
    </div>
  );
};

ModalWindow.propTypes = {
  callback: PropTypes.func.isRequired,
  obj: PropTypes.object,
  selectedMethod: PropTypes.string,
};
