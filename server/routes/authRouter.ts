import express from 'express';
import authController from '../controllers/authController';
import { validRegister } from '../middleware/valid';

const router = express.Router();

router.post('/register', validRegister, authController.register);
router.post('/activate', authController.activateAccount);

export default router;