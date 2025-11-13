import express from "express";
import { login, checkAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.get("/check", checkAuth);

export default router;
