import authRouter from "./auth.js";
import userRouter from "./user.js"
import itenaryRouter from "./itenary.js"

import express from "express";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/itenary", itenaryRouter);

export default router;