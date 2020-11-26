/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.js';

const router = express.Router();

/**
 * Create a new user
 */
router.post('/signUp', userController.signUp);

/**
 * login a user based on identifiers (email and pwd)
 */

router.post('/login', userController.login);

export default router;
