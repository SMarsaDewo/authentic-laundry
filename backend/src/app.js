import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/orders", orderRoutes);

export default app;
