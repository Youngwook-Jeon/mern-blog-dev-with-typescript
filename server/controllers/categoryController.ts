import { Request, Response } from 'express';
import Category from '../models/categoryModel';
import Blog from '../models/blogModel';
import { IReqAuth } from '../config/interface';

const categoryController = {
  createCategory: async (req: IReqAuth, res: Response) => {
    if (!req.user) return res.status(400).json({ msg: "Invalid Authorization." });

    if (req.user.role !== 'admin')
      return res.status(400).json({ msg: "Invalid Authorization." });

    try {
      const name = req.body.name.toLowerCase();
      const newCategory = new Category({ name });
      await newCategory.save();

      res.json({ newCategory });
    } catch (err: any) {
      let errMsg;
      if (err.code === 11000) {
        errMsg = Object.values(err.keyValue)[0] + " already exists.";
      } else {
        let name = Object.keys(err.errors)[0];
        errMsg = err.errors[`${name}`].message
      }
      return res.status(500).json({ msg: errMsg });
    }
  },
  getCategories: async (req: Request, res: Response) => {
    try {
      const categories = await Category.find().sort("-createdAt");
      res.json({ categories });
    } catch (err: any) {
      
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req: IReqAuth, res: Response) => {
    if (!req.user) return res.status(400).json({ msg: "Invalid Authorization." });

    if (req.user.role !== 'admin')
      return res.status(400).json({ msg: "Invalid Authorization." });
    try {
      const category = await Category.findOneAndUpdate({
        _id: req.params.id
      }, { name: (req.body.name).toLowerCase() });

      res.json({ msg: "Update Success!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategory: async (req: IReqAuth, res: Response) => {
    if (!req.user) return res.status(400).json({ msg: "Invalid Authorization." });

    if (req.user.role !== 'admin')
      return res.status(400).json({ msg: "Invalid Authorization." });
    try {
      const blog = await Blog.findOne({ category: req.params.id });

      if (blog) 
        return res.status(400).json({
          msg: "Cannot delete the category. Blogs with the category already exist."
        })
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category)
        return res.status(400).json({ msg: "Category does not exist." });

      res.json({ msg: "Delete Success!" });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  }
}

export default categoryController;