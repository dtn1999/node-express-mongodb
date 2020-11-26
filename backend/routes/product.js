/* eslint-disable import/extensions */
import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

/**
 * get all products
 */
router.get('/', (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({ products });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

/**
 * get  a product using his id
 */
router.get('/:id', (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      res.status(200).json({ product });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

/**
 * create  a new product
 */
router.post('/', (req, res) => {
  const newProduct = new Product({
    ...req.body,
  });
  newProduct.save()
    .then((savedProduct) => {
      res.status(200).json({ product: savedProduct });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

/**
 * update an existing product based on his id
 */
router.put('/:id', (req, res) => {
  Product.updateOne({ _id: req.params.id }, {
    ...res.body, _id: req.params.id,
  })
    .then(() => {
      res.status(203).json({ message: 'Modified!' });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

/**
 * delete an existing product based on his id
 */
router.delete('/:id', (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Deleted!' });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

export default router;
