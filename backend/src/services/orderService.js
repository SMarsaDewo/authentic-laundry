import { orderRepository } from "../repositories/orderRepository.js";

export const orderService = {
  createOrder: async (data) => {
    return await orderRepository.create(data);
  },

  deleteOrder: async (id) => {
    return await orderRepository.delete(id);
  },

  updateOrder: async (id, data) => {
    return await orderRepository.update(id, data);
  },

  getAllOrders: async () => {
    return await orderRepository.findAll();
  },
};
