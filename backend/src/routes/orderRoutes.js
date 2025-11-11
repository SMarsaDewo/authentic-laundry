import express from "express";
import { orderController } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", orderController.create);
router.get("/", orderController.getAll);

export default router;
