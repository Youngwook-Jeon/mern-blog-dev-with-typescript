import express from 'express';
import blogController from '../controllers/blogController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/blog', auth, blogController.createBlog);
router.get('/home/blogs', blogController.getHomeBlogs);
router.get('/blogs/category/:id', blogController.getBlogsByCategory);
router.get('/blogs/user/:id', blogController.getBlogsByUser);
router.route('/blog/:id')
  .get(blogController.getBlog)
  .put(auth, blogController.updateBlog)
  .delete(auth, blogController.deleteBlog);

router.get('/search/blogs', blogController.searchBlogs);

export default router;