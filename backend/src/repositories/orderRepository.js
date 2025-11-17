import { pool } from "../config/db.js";

export const orderRepository = {
  async create(order) {
    const { nama, telepon, layanan, jumlah, alamat, catatan, estimasiBiaya } =
      order;

    const query = `
      INSERT INTO orders 
      (nama, telepon, layanan, jumlah, alamat, catatan, estimasi_biaya, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')
    `;

    const [result] = await pool.query(query, [
      nama,
      telepon,
      layanan,
      jumlah,
      alamat,
      catatan,
      estimasiBiaya,
    ]);

    return { id: result.insertId, ...order, status: "Pending" };
  },

  async delete(id) {
    const query = "DELETE FROM orders WHERE id = ?";
    return await pool.query(query, [id]);
  },

  async update(id, data) {
    const { nama, telepon, layanan, jumlah, alamat, catatan, estimasiBiaya } =
      data;

    const query = `
      UPDATE orders
      SET nama = ?, telepon = ?, layanan = ?, jumlah = ?, alamat = ?, catatan = ?, estimasi_biaya = ?
      WHERE id = ?
    `;

    await pool.query(query, [
      nama,
      telepon,
      layanan,
      jumlah,
      alamat,
      catatan,
      estimasiBiaya,
      id,
    ]);

    return { id, ...data };
  },

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM orders ORDER BY id DESC");
    return rows;
  },
};
