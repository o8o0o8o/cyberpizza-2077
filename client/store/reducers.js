import { setProducts, setCategories } from './actions';

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case setProducts.type:
      return action.payload;
    default:
      return state;
  }
};

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case setCategories.type:
      return action.payload;
    default:
      return state;
  }
};
