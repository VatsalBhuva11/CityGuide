import authRouter from "./auth.js";
import userRouter from "./user.js";
import itenaryRouter from "./itenary.js";
import commentRouter from "./comment.js";
import blogRouter from "./blogs.js";

import express from "express";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/itenary", itenaryRouter);
router.use("/blog", blogRouter);
router.use("/comment", commentRouter);

export default router;
