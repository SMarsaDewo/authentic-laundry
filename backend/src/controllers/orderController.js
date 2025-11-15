import { orderService } from "../services/orderService.js";

export const orderController = {
  async create(req, res) {
    try {
      const result = await orderService.createOrder(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Gagal menyimpan pesanan" });
    }
  },

  async getAll(req, res) {
    try {
      const data = await orderService.getAllOrders();
      
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Gagal mengambil data" });
    }
  },
};
