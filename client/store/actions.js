import { createAction } from './createAction';

export const setProducts = createAction('[Products] Set new array');
export const setCategories = createAction('[Categories] Set new array');
export const setUsers = createAction('[Users] Set new array');
export const setCart = createAction('[Cart] Set a cart');
export const addProductToCart = createAction('[Cart] Add product to cart');
export const removeProductFromCart = createAction('[Cart] Remove product from cart');
