/* eslint-disable import/extensions */
import express from 'express';
import productController from '../controllers/product.js';
import authMiddleware from '../middleware/auth.js';
// import multerMiddleware from '../middleware/multer-config.js';

const router = express.Router();

/**
 * get all products
 */
router.get('/', authMiddleware.auth, productController.getAllProducts);

/**
 * get  a product using his id
 */
router.get('/:id', authMiddleware.auth, productController.getProductById);

/**
 * create  a new product
 */
router.post('/', authMiddleware.auth, productController.createProduct);

/**
 * update an existing product based on his id
 */
router.put('/:id', authMiddleware.auth, productController.updateProduct);

/**
 * delete an existing product based on his id
 */
router.delete('/:id', authMiddleware.auth, productController.deleteProduct);

export default router;
