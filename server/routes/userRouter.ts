import express from 'express';
import auth from '../middleware/auth';
import userController from '../controllers/userController';

const router = express.Router();

router.patch('/user', auth, userController.updateUser);
router.patch('/reset_password', auth, userController.resetPassword);
router.get('/user/:id', userController.getUser);
export default router;