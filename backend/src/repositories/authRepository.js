import { pool } from "../config/db.js";

export const findAdminByUsername = async (username) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admin WHERE username = ?", [
      username,
    ]);
    return rows[0];
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};
