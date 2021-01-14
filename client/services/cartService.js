import { ENDPOINT } from './SERVICES';

export class CartService {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  getCartById(cartID) {
    return fetch(`${this.endpoint}/api/cart/${cartID}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  addProductToCart(cartID, productId, quantity, name, price) {
    return fetch(`${this.endpoint}/api/cart/${productId}/product`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartID, quantity, name, price }),
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  delProductFromCart(cartID, productId, quantity) {
    return fetch(`${this.endpoint}/api/cart/${productId}/product`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartID, quantity }),
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  createOne({ name, products }) {
    return fetch(`${this.endpoint}/api/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, products }),
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  updateOne(id, obj) {
    return fetch(`${this.endpoint}/api/cart`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, obj }),
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  clearOne(cartID) {
    return fetch(`${this.endpoint}/api/cart/clear`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartID }),
    })
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }
}

export const cartService = new CartService();
