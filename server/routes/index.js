const express = require('express');
const router = express.Router();

router.all('/', function (req, res) {
  if (!req) return 'No body';

  res.send('To view pizzas send GET request /api/products ');
});

module.exports = router;
