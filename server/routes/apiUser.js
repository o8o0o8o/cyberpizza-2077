const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../models');

router.get('/all', findAllUsers);
router.get('/', getCurrentUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

async function createUser(req, res) {
  const { name, email, isActive } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const usersArray = await User.find();
    const isAdmin = !usersArray.length ? true : req.body.isAdmin;
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    await User.create({ name, password, email, isAdmin, isActive });
    await loginUser(req, res);
  } else {
    res.status(409).send('The user with this email exists');
  }
}

async function deleteUser(req, res) {
  const idParameter = req.body.id || req.params.id;
  const result = await User.deleteOne({ _id: idParameter });
  const usersArray = await User.find();
  if (!usersArray.length) logout();

  res.send(result);
}

async function findAllUsers(req, res) {
  const usersArray = await User.find();

  return res.send(usersArray);
}

async function logout(req, res) {
  res.clearCookie('user');
  res.send('You logged out');
}

async function getCurrentUser(req, res) {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(404).send('User not found');
  }
}

async function loginUser(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (bcrypt.compareSync(req.body.password, user.password)) {
    if (user.isActive) {
      const cookie = req.cookies.user;
      if (cookie === undefined) {
        const token = jwt.sign({ id: user._id }, process.env.AUTH_KEY);
        res.cookie('user', token);
      }
    }
    res.status(200).send('Login successfully');
  } else {
    res.status(400).send('Something wrong with your data');
  }
}

async function updateUser(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const user = await User.updateOne(idParameter, req.body);

  return res.send(user);
}

module.exports = router;
