import express from 'express';
import auth from '../middleware/auth';
import userController from '../controllers/userController';
import { validRegister } from '../middleware/valid';

const router = express.Router();

router.patch('/user', auth, userController.updateUser);
export default router;