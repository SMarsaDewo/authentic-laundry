import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findAdminByUsername } from "../repositories/authRepository.js";

export const loginAdmin = async (username, password) => {
  const admin = await findAdminByUsername(username);
  if (!admin) throw new Error("Admin tidak ditemukan");

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) throw new Error("Password salah");

  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    process.env.JWT_SECRET || "rahasia_superkuat",
    { expiresIn: "1d" }
  );

  return { token, username: admin.username };
};
