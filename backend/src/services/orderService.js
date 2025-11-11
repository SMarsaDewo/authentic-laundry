import { orderRepository } from "../repositories/orderRepository.js";

export const orderService = {
  createOrder: async (data) => {
    return await orderRepository.create(data);
  },
  getAllOrders: async () => {
    return await orderRepository.findAll();
  },
};
