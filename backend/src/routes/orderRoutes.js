import express from "express";
import { orderController } from "../controllers/orderController.js";

const router = express.Router();

// POST /api/orders
router.post("/", orderController.create);
router.delete("/:id", orderController.delete);
router.put("/:id", orderController.update);

// GET /api/orders
router.get("/", orderController.getAll);

export default router;
