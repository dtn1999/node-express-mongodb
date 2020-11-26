/* eslint-disable import/extensions */
import express from 'express';
import productController from '../controllers/product.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

/**
 * get all products
 */
router.get('/', authMiddleware, productController.getAllProducts);

/**
 * get  a product using his id
 */
router.get('/:id', authMiddleware, productController.getProductById);

/**
 * create  a new product
 */
router.post('/', authMiddleware, productController.createProduct);

/**
 * update an existing product based on his id
 */
router.put('/:id', authMiddleware, productController.updateProduct);

/**
 * delete an existing product based on his id
 */
router.delete('/:id', authMiddleware, productController.deleteProduct);

export default router;
