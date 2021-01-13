const express = require('express');
const router = express.Router();

const { Cart } = require('../models');

router.get('/:cart_id', findCartById);
router.post('/', createCart);
router.post('/:product_id/product', putProductInCart);
router.put('/:id', updateCart);
router.delete('/:product_id/product', deleteProductFromCart);
router.post('/:id/code', applyCodeToCart);
router.post('/clear', clearCartById);

async function createCart(req, res) {
  if (req.body) {
    const { name } = req.body;
    const cart = await Cart.create({
      name,
    });

    res.status(200).send(cart);
  } else {
    res.status(404).send('Empty request');
  }
}

async function putProductInCart(req, res) {
  if (req.body && req.params) {
    const { cartID, quantity, name, price } = req.body;
    const productID = req.params.product_id;
    const cart = await Cart.findById(cartID);

    for (const product of cart.products) {
      if (String(product.product) === String(productID)) {
        product.quantity += quantity;

        await cart.save();
        return res.status(200).send(cart);
      }
    }

    cart.products.push({ product: productID, quantity, name, price });
    await cart.save();
    res.status(200).send(cart);
  } else {
    res.status(404).send('Empty request');
  }
}

async function deleteProductFromCart(req, res) {
  if (req.body && req.params) {
    const { cartID, quantity } = req.body;
    const productID = req.params.product_id;
    const cart = await Cart.findById(cartID);

    for (const product of cart.products) {
      if (String(product.product) === String(productID)) {
        if (product.quantity > quantity) {
          product.quantity -= quantity;
        } else {
          const index = cart.products.findIndex(el => (el.product = product));

          cart.products.splice(index, 1);
        }

        await cart.save();
        return res.status(200).send(cart);
      }
    }

    res.status(400).send('Not such a product');
  } else {
    res.status(404).send('Empty request');
  }
}

async function findCartById(req, res) {
  if (req.params && req.params.cart_id) {
    const cart_id = req.params.cart_id;
    const cart = await Cart.findById(cart_id);

    res.status(200).send(cart);
  } else {
    res.status(404).send('No cart was found');
  }
}

async function updateCart(req, res) {
  if (req.body) {
    const cartId = req.body.cartId;
    const cart = await Cart.updateOne(cartId, req.body.update);

    res.status(200).send(cart);
  } else {
    res.status(404).send('Empty request');
  }
}

async function clearCartById(req, res) {
  if (req.body) {
    const cartID = req.body.cartID;
    const cart = await Cart.findById(cartID);
    cart.products = [];
    await cart.save();

    res.status(200).send(cart);
  } else {
    res.status(404).send('Empty request');
  }
}

async function applyCodeToCart(req, res) {
  if (req.body) {
    const cartId = req.body.cartId;
    const cart = await Cart.findById(cartId);
    const code = req.body.code;

    cart.code *= code;
    await cart.save();

    res.status(200).send({ message: `Code ${code}  applied to card`, cart });
  } else {
    res.status(404).send('Empty request');
  }
}

module.exports = router;
