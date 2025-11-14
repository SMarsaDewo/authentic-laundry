import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER ||"root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME ||  "laundry_db",
  port: process.env.DB_PORT || 3306,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Connected to MySQL database");
    connection.release();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
})();

