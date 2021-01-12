import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { productsReducer, categoriesReducer, usersReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  users: usersReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
