import express from "express";
import {
    getAllBlogs,
    getBlog,
    createBlog,
    likeBlog,
    dislikeBlog,
    likeStatus,
} from "../controllers/blog.controller.js";
import { commentOnBlog } from "../controllers/comment.controller.js";

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.get("/:id/status", likeStatus);
router.route("/:id").get(getBlog);
router.patch("/:id/like", likeBlog);
router.patch("/:id/dislike", dislikeBlog);
router.post("/:id/comment", commentOnBlog);

export default router;
