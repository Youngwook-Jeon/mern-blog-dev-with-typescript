import express from 'express';
import categoryController from '../controllers/categoryController';
import auth from '../middleware/auth';

const router = express.Router();

router.route('/category')
  .get(categoryController.getCategories)
  .post(auth, categoryController.createCategory);

router.route('/category/:id')
  .patch(auth, categoryController.updateCategory)
  .delete(auth, categoryController.deleteCategory);

export default router;