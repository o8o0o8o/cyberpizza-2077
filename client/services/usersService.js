import { ENDPOINT } from './SERVICES';

export class UsersService {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  getAll() {
    return fetch(`${this.endpoint}/api/user/all`, {
      method: 'GET',
    })
      .then(response => response)
      .then(response => response.json())
      .catch(e => {
        throw new Error(e.message);
      });
  }

  getCurrent() {
    return fetch(`${this.endpoint}/api/user`, {
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
      .catch(e => {
        throw new Error(e.message);
      });
  }

  login({ password, email }) {
    return fetch(`${this.endpoint}/api/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    })
      .then(response => response)
      .catch(e => {
        throw new Error(e.message);
      });
  }

  logout() {
    return fetch(`${this.endpoint}/api/user/logout`, {
      method: 'POST',
    })
      .then(response => response)
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
      .catch(e => {
        throw new Error(e.message);
      });
  }
}

export const usersService = new UsersService();
