const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const { User, Cart } = require('../models');

async function cookieMonster(req, res, next) {
  const cookieSessionId = req.cookies.sessionId;
  let cart;

  if (cookieSessionId === undefined) {
    const sessionId = uuidv4();
    cart = await Cart.create({ sum: 0, status: true, code: 0, specifyTheUser: { sessionId: sessionId } }); // for users too

    res.cookie('sessionId', sessionId, { httpOnly: true });
  } else {
    res.cookie('sessionId', cookieSessionId, { httpOnly: true });

    cart = await Cart.findOne({ specifyTheUser: { sessionId: cookieSessionId } }); // for users too
  }

  res.cookie('cartID', cart._id, { httpOnly: true });
  req.cart = cart;

  if (req.cookies.user) {
    const token = jwt.verify(req.cookies.user, process.env.AUTH_KEY);
    const user = await User.findById({ _id: token.id });

    if (user) {
      req.user = user;
    }
  }

  next();
}

module.exports = cookieMonster;
