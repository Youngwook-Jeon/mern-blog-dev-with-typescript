import express from 'express';
import blogController from '../controllers/blogController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/blog', auth, blogController.createBlog);
router.get('/home/blogs', blogController.getHomeBlogs);

export default router;