import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

async function prepareApp(mongoUrl) {
  require('dotenv').config();
  require('../server/models');
  const cookieParser = require('cookie-parser');
  const express = require('express');
  const cookieMonster = require('../server/middleware/cookieMonster');
  const bodyParser = require('body-parser');

  const app = express();

  await mongoose.connect(mongoUrl, { useNewUrlParser: true });

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieMonster);
  app.use('/api/user/', require('../server/routes/apiUser'));
  app.use('/api/categories', require('../server/routes/apiCategories'));

  return app;
}

let mongoServer;
let agent;
let server;

beforeAll(async () => {
  const request = require('supertest');

  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  const app = await prepareApp(mongoUri);

  agent = request.agent(app);

  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;

  app.set('port', port);
  server = app.listen(port, host);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  server.close();
});

describe('Test user routes', () => {
  it('Successful registration', async () => {
    const user = { name: 'Oleg', password: 'password', email: 'your@mail.com', isActive: true };

    const res = await agent.post('/api/user').send(user);
    expect(res.headers['set-cookie'][0].startsWith('user='));
  });

  it('Unsuccessful registration: user is NOT ACTIVE', async () => {
    const user = { name: 'Ivan', password: 'password', email: 'y@mail.com' };

    const res = await agent.post('/api/user').send(user);
    expect(res.headers['set-cookie']).toEqual(undefined);
  });

  it('The user with this email exists', async () => {
    const user = { name: 'Vasya', password: 'password', email: 'my@mail.com', isActive: true };

    await agent.post('/api/user').send(user);
    const res = await agent.post('/api/user').send(user);
    expect(res.status).toEqual(409);
  });

  it('Get current user, should fail', async () => {
    const user = { name: 'Dima', password: 'password', email: 'not@mail.com', isActive: true };

    await agent.post('/api/user').send(user);
    await agent.post('/api/user/logout').send();

    const res = await agent.get('/api/user');
    expect(res.status).toEqual(404);
  });

  it('Get current user, should return object with fields', async () => {
    const user = { name: 'Olya', password: 'password', email: 'olya@mail.com', isActive: true };

    await agent.post('/api/user').send(user);

    const res = await agent.get('/api/user');
    expect(res.body._id && res.body.name && res.body.password && res.body.email && res.body.isActive);
  });
});

// describe('Test category routes', () => {
//   it('Create category without admin privilege', async () => {
//     const category = { name: 'New' };

//     const res = await agent.post('/api/categories').send(category);
//     expect(res.status).toEqual(401);
//   });

//   it('Create category with admin privilege', async () => {
//     const admin = { name: 'Oleg', password: 'password', email: 'your@mail.com', isAdmin: true, isActive: true };
//     const category = { name: 'New' };

//     await agent.post('/api/user').send(admin);
//     const res = await agent.post('/api/categories').send(category);
//     expect(res.status).toEqual(200);
//   });
// });
