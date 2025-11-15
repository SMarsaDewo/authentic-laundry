import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findAdminByUsername } from "../repositories/authRepository.js";
// import * as authService from "../services/authService.js"; 
import dotenv from "dotenv";

dotenv.config();

// ===== LOGIN =====
export const login = async (req, res) => {
  console.log("📩 Data diterima dari frontend:", req.body); // debug penting!

  const { username, password } = req.body;

  // Validasi input kosong
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username dan password wajib diisi" });
  }

  try {
    const admin = await findAdminByUsername(username);

    if (!admin) {
      console.log("❌ Admin tidak ditemukan di database");
      return res.status(404).json({ message: "Admin tidak ditemukan" });
    }

    // Cek apakah password di database di-hash atau plain
    let isPasswordValid = false;

    if (
      admin.password.startsWith("$2a$") ||
      admin.password.startsWith("$2b$")
    ) {
      // Password sudah di-hash → gunakan bcrypt
      isPasswordValid = await bcrypt.compare(password, admin.password);
    } else {
      // Password masih plain text
      isPasswordValid = password === admin.password;
    }

    if (!isPasswordValid) {
      console.log("❌ Password salah untuk username:", username);
      return res.status(401).json({ message: "Username atau password salah" });
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("✅ Login berhasil untuk:", username);

    res.json({
      message: "Login berhasil",
      token,
      admin: { id: admin.id, username: admin.username },
    });
  } catch (error) {
    console.error("🔥 Login error:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// ===== CHECK AUTH =====
export const checkAuth = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ valid: false, message: "Token tidak ada" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, admin: decoded });
  } catch (error) {
    res.status(401).json({ valid: false, message: "Token tidak valid" });
  }
};
