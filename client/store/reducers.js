import {
  setProducts,
  setCategories,
  setUsers,
  setCart,
  removeProductFromCart,
  addProductToCart,
  clearCart,
} from './actions';

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

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case setCart.type:
      return action.payload;
    case addProductToCart.type: {
      state.forEach(a => {
        if (a.cartId === action.payload.cartId) {
          a.products.push({ product: { projectId: action.payload.projectId }, quantity: action.payload.qty });
        }
      });
      return state;
    }
    case removeProductFromCart.type: {
      state.forEach((a, i) => {
        if (a.cartId === action.payload.cartId) {
          state.splice(i, 1);
        }
      });
      return state;
    }
    case clearCart.type: {
      return [];
    }
    default:
      return state;
  }
};
