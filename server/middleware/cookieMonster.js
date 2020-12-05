const jwt = require('jsonwebtoken');

const { User } = require('../models');

async function authenticate(req, res, next) {
  if (req.cookies.user) {
    const token = jwt.verify(req.cookies.user, process.env.AUTH_KEY);
    const user = await User.findById({ _id: token.id });

    if (user) {
      req.user = user;
    }
  }

  next();
}

module.exports = authenticate;
