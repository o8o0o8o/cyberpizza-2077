const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const { User } = require('../models');

router.get('/', findAllUsers);
router.post('/login', loginUser);
router.post('/logout', logout);
router.post('/', createUser);

async function createUser(req, res, next) {
  const { name, email, isActive } = req.body;
  const usersArray = await User.find();
  const isAdmin = !usersArray.length ? true : req.body.isAdmin;
  const password = bcrypt.hashSync(req.body.password, 8);
  await User.create({ name, password, email, isAdmin, isActive });

  await loginUser(req, res);

  next();
}

async function findAllUsers(req, res) {
  const usersArray = await User.find();

  return res.send(usersArray);
}

async function logout(req, res) {
  // usersArray = await User.find();

  return res.send('usersArray');
}

// async function getUserInfo(req, res, next) {
//   const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
//   const user = await User.findById(idParameter);

//   next();
// }

async function loginUser(req, res, next) {
  const { email } = req.body;
  const password = bcrypt.hashSync(req.body.password, 8);
  const user = await User.findOne({ email });
  bcrypt.compareSync(req.body.password, password), { password, email };

  res.user = user;
  if (user.isActive) {
    const cookie = req.cookies.user;
    if (cookie === undefined) {
      const token = jwt.sign({ id: user._id }, process.env.AUTH_KEY);
      res.cookie('user', token);
    }
  }
  next();
}

module.exports = router;
