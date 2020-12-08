import { setProducts, setCategories, setUsers } from './actions';

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

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case setUsers.type:
      return action.payload;
    default:
      return state;
  }
};
