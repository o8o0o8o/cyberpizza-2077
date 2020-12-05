import { ENDPOINT } from './SERVICES';

export class UsersService {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  getAll() {
    return fetch(`${this.endpoint}/api/user`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  getOne({ id }) {
    return fetch(`${this.endpoint}/api/user:${id}`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  createOne({ name, password, email, isAdmin, isActive }) {
    return fetch(`${this.endpoint}/api/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password, email, isAdmin, isActive }),
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  updateOne(id, obj) {
    return fetch(`${this.endpoint}/api/user`, {
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
    return fetch(`${this.endpoint}/api/user`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }
}

export const usersService = new UsersService();
