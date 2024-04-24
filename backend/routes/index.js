import authRouter from "./auth.js";

import express from "express";

const router = express.Router();

router.use("/auth", authRouter);

export default router;