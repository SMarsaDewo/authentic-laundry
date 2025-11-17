import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Backend berjalan di port ${PORT}`);
  console.log(`📌 Order API : http://localhost:${PORT}/api/orders`);
  console.log(`📌 Auth API  : http://localhost:${PORT}/api/auth`);
});
