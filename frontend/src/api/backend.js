import axios from "axios";

// BACKEND hanya bisa diakses via localhost:5001 dari browser
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const API = axios.create({ baseURL: API_BASE });

export const createOrder = async (orderData) => {
  const res = await API.post("/orders", orderData);
  return res.data;
};

export const deleteOrder = (id) => API.delete(`/orders/${id}`);
export const updateOrder = (id, data) => API.put(`/orders/${id}`, data);

export const getOrders = async () => {
  const res = await API.get("/orders");
  return res.data;
};
