const express = require('express');
const router = express.Router();

const { Category } = require('../models');

router.get('/', findCategoriesAll);
router.get('/:id', findCategoryById);
router.post('/', createCategory);
router.put('/', updateCategoryById);
router.delete('/', deleteCategoryById);

async function createCategory(req, res) {
  if (req.user && req.user.isAdmin) {
    const { name } = req.body;
    await Category.create({
      name,
    });
    res.status(200).send('Category created');
  } else {
    res.status(401).send('You are not an admin');
  }
}

async function findCategoryById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const category = await Category.findById(idParameter);

  return res.send(category);
}

async function findCategoriesAll(req, res) {
  const categoryArray = await Category.find();

  if (!req) return 'No body';

  return res.send(categoryArray);
}

async function deleteCategoryById(req, res) {
  const idParameter = req.body.id || req.params.id;

  if (req.user.isAdmin) {
    const result = await Category.deleteOne({ _id: idParameter });

    return res.send(result);
  }
}

async function updateCategoryById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const category = await Category.updateOne(idParameter, req.body);

  return res.send(category);
}

module.exports = router;
