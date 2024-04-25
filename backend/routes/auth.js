import { login, register, Authentication } from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/authenticate", Authentication);

export default router;