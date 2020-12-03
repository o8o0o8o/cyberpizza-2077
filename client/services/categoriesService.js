import { ENDPOINT } from './SERVICES';

export class CategoriesService {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  getAll() {
    return fetch(`${this.endpoint}/api/categories`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  getOne({ id }) {
    return fetch(`${this.endpoint}/api/categories:${id}`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  createOne({ name, products }) {
    return fetch(`${this.endpoint}/api/categories`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, products }),
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  updateOne(id, obj) {
    return fetch(`${this.endpoint}/api/categories`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, obj }),
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  deleteOne(id) {
    return fetch(`${this.endpoint}/api/categories`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }
}

export const categoriesService = new CategoriesService();
