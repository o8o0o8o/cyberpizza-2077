import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { productsReducer, categoriesReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
