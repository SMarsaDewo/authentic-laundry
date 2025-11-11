import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createOrder = async (orderData) => {
  const res = await API.post("/orders", orderData);
  return res.data;
};

export const getOrders = async () => {
  const res = await API.get("/orders");
  return res.data;
};
