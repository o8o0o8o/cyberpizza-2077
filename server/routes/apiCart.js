const express = require('express');
const router = express.Router();

const { Cart } = require('../models');

router.get('/:cart_id', findCartById);
router.post('/', createCart);
router.post('/:product_id/product', putProductInCart);
router.put('/:id', updateCart);
router.delete('/:cart_id/items/:item_id', deleteProductFromCart);
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
    const { cartID, quantity, name } = req.body;
    const productID = req.params.product_id;
    const cart = await Cart.findById(cartID);

    for (const product of cart.products) {
      if (String(product.product) === String(productID)) {
        product.quantity += quantity;

        await cart.save();
        return res.status(200).send(cart);
      }
    }

    cart.products.push({ product: productID, quantity, name });
    await cart.save();
    res.status(200).send(cart);
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

async function deleteProductFromCart(req, res) {
  if (req.body) {
    const cartId = req.body.cartId;
    const cart = await Cart.findById(cartId);
    const productId = req.body.productId;

    cart.products = cart.products.filter(a => a.productId !== productId);
    await cart.save();

    res.status(200).send({ message: `Product ${productId} deleted from card`, cart });
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
