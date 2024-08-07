import express from "express";
import {
    getAllBlogs,
    getBlog,
    createBlog,
    likeBlog,
    dislikeBlog,
    likeStatus,
} from "../controllers/blogs.js";

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.get("/:id/status", likeStatus);
router.route("/:id").get(getBlog);
router.patch("/:id/like", likeBlog);
router.patch("/:id/dislike", dislikeBlog);

export default router;
