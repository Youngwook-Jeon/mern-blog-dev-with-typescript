import express from 'express';
import commentController from '../controllers/commentController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/comment', auth, commentController.createComment);
router.get('/comments/blog/:id', commentController.getComments);
router.post('/reply_comment', auth, commentController.replyComment);
router.patch('/comment/:id', auth, commentController.updateComment);

export default router;