import express from "express";
import {  getAllBlogs,
  getBlog,
  createBlog} from "../controllers/blogs.js"

const router = express.Router();

router.route('/').get(getAllBlogs).post(createBlog);
router.route('/:id').get(getBlog);

export default router;


