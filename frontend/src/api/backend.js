import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

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
