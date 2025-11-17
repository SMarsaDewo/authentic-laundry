import express from "express";
import cors from "cors";
import { pool } from "./config/db.js";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ====== GLOBAL MIDDLEWARE ======
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====== TEST DB ======
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1");
    res.json({ success: true, message: "Koneksi ke database OK", rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ====== ROUTES ======
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// ====== ROOT ======
app.get("/", (req, res) => {
  res.send("Backend Authentic Laundry API aktif 🚀");
});

export default app;
