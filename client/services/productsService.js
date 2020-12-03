import { ENDPOINT } from './SERVICES';

export class ProductsService {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  getAll() {
    return fetch(`${this.endpoint}/api/products`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  getOne({ id }) {
    return fetch(`${this.endpoint}/api/products:${id}`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  createOne({ name, price, description, weight, data, image, category }) {
    return fetch(`${this.endpoint}/api/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, description, weight, data, image, category }),
    })
      .then(response => response)
      .catch(e => {
        throw new Error(e.message);
      });
  }

  updateOne(id, obj) {
    return fetch(`${this.endpoint}/api/products`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id, obj),
    })
      .then(response => response)
      .catch(e => {
        throw new Error(e.message);
      });
  }

  deleteOne(id) {
    return fetch(`${this.endpoint}/api/products`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then(response => response)
      .catch(e => {
        throw new Error(e.message);
      });
  }
}

export const productsService = new ProductsService();
