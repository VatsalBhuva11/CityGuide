import { createUser, findUserByUID } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/getUser",findUserByUID);

export default router;