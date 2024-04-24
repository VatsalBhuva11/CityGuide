import { createUser } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/createUser", createUser);

export default router;