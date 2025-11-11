import { pool } from "../config/db.js";

export const orderRepository = {
  async create(order) {
    const { nama, telepon, layanan, jumlah, alamat, catatan, estimasiBiaya } = order;
    const [result] = await pool.query(
      "INSERT INTO orders (nama, telepon, layanan, jumlah, alamat, catatan, estimasi_biaya) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nama, telepon, layanan, jumlah, alamat, catatan, estimasiBiaya]
    );
    return { id: result.insertId, ...order };
  },

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM orders ORDER BY id DESC");
    return rows;
  },
};
