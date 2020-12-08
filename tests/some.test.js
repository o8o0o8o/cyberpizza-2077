// import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';

// const { User } = require('../server/models/user');
// // const request = require('supertest');
// // const app = require('../server/app.js').app;

// // May require additional time for downloading MongoDB binaries
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

// let mongoServer;
// const opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above

// beforeAll(async () => {
//   mongoServer = new MongoMemoryServer();
//   const mongoUri = await mongoServer.getUri();
//   await mongoose.connect(mongoUri, opts, err => {
//     if (err) console.error(err);
//   });
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });

// describe('Test duplicate user creation', () => {
//   it('should return error', async () => {
//     await User.create({ name: 'Vasya', password: 'password', email: 'my@mail.com' });
//     const error = await User.create({ name: 'Vasya', password: 'password', email: 'my@mail.com' });
//     expect(error).toEqual(0);
//   });
// });

// // describe('Post Endpoints', () => {
// //   it('should return 200 status code', async done => {
// //     const res = await request(app).get('/api/products').send();
// //     expect(res.statusCode).toEqual(200);

// //     done();
// //     // expect(res.body).toHaveProperty('post');
// //   });

// //   it('should create a new post', async () => {
// //     const res = await request(app).post('/api/categories').send({
// //       userId: 1,
// //       title: 'test is cool',
// //     });
// //     expect(res.statusCode).toEqual(200);
// //     expect(res.body).toHaveProperty('post');
// //   });
// // });
