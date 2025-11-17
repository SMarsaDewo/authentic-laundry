import { orderService } from "../services/orderService.js";

export const orderController = {
  async create(req, res) {
    try {
      console.log("📥 DATA MASUK DARI FRONT END:", req.body);

      const result = await orderService.createOrder(req.body);

      res.status(201).json({
        success: true,
        message: "Pesanan berhasil dibuat",
        data: result,
      });
    } catch (error) {
      console.error("❌ ERROR CREATE ORDER:", error);
      res
        .status(500)
        .json({ success: false, message: "Gagal menyimpan pesanan" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await orderService.deleteOrder(id);

      res.json({ success: true, message: "Pesanan berhasil dihapus" });
    } catch (error) {
      console.error("❌ ERROR DELETE ORDER:", error);
      res
        .status(500)
        .json({ success: false, message: "Gagal menghapus pesanan" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const result = await orderService.updateOrder(id, data);

      res.json({
        success: true,
        message: "Pesanan berhasil diupdate",
        data: result,
      });
    } catch (error) {
      console.error("❌ ERROR UPDATE ORDER:", error);
      res.status(500).json({ success: false, message: "Gagal update pesanan" });
    }
  },

  async getAll(req, res) {
    try {
      const data = await orderService.getAllOrders();
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("❌ ERROR GET ALL ORDERS:", error);
      res.status(500).json({ success: false, message: "Gagal mengambil data" });
    }
  },
};
