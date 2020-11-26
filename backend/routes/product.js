/* eslint-disable import/extensions */
import express from 'express';
import productController from '../controllers/product.js';

const router = express.Router();

/**
 * get all products
 */
router.get('/', productController.getAllProducts);

/**
 * get  a product using his id
 */
router.get('/:id', productController.getProductById);

/**
 * create  a new product
 */
router.post('/', productController.createProduct);

/**
 * update an existing product based on his id
 */
router.put('/:id', productController.updateProduct);

/**
 * delete an existing product based on his id
 */
router.delete('/:id', productController.deleteProduct);

export default router;
