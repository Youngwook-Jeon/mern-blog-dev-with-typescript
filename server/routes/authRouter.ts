import express from 'express';
import authController from '../controllers/authController';
import { validRegister } from '../middleware/valid';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/register', validRegister, authController.register);
router.post('/activate', authController.activateAccount);
router.post('/login', authController.login);
router.get('/logout', auth, authController.logout);
router.get('/refresh_token', authController.refreshToken);
router.post('/google_login', authController.googleLogin);
router.post('/facebook_login', authController.facebookLogin);
router.post('/login_sms', authController.loginSMS);
router.post('/sms_verify', authController.smsVerify);

export default router;