import { Request, Response } from 'express';
import Blog from '../models/blogModel';
import { IReqAuth } from '../config/interface';

const blogController = {
  createBlog: async (req: IReqAuth, res: Response) => {
    if (!req.user) return res.status(400).json({ msg: "Invalid Authorization" });

    try {
      const { title, content, description, thumbnail, category } = req.body;
      const newBlog = new Blog({
        user: req.user._id,
        title, 
        content,
        description, 
        thumbnail, 
        category
      });

      await newBlog.save();
      res.json({ newBlog });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

export default blogController;