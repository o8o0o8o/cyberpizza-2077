const express = require('express');
const router = express.Router();

const { User } = require('../models');

router.get('/', getUserInfo);
router.post('/login', authUser);
router.post('/logout', logout);
router.post('/', createUser);

async function createUser(req, res) {
  const { name, email, isActive } = req.body;
  await findAllUsers();
  const isAdmin = !req.usersArray.length ? true : req.body.isAdmin;
  const password = 'hash';
  const user = await User.create({ name, password, email, isAdmin, isActive });

  return res.send(user);
}

async function findAllUsers(req, res) {
  const usersArray = await User.find();

  return res.usersArray(usersArray);
}

async function logout(req, res) {
  // usersArray = await User.find();

  return res.send('usersArray');
}

async function getUserInfo(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const user = await User.findById(idParameter);

  return res.send(user);
}

async function authUser(req, res) {
  const { password, email } = req.body;

  const user = await User.findOne({ password, email });
  return res.usersArray(user);
}

module.exports = router;
