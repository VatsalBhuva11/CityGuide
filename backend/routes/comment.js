import express from "express";
import {
    likeComment,
    dislikeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.patch("/:id/like", likeComment);
router.patch("/:id/dislike", dislikeComment);

export default router;
