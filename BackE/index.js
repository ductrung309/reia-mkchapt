import express from "express";
import dotenv from "dotenv";

import authRouter from "./routes/auth-routes.js";
import connectMongoDB from "./db/mongodb-connect.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Trung đẹp trai!!!");
});

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`MESS ĐANG CHẠY Ở CỔNG ${PORT} NÀ!!!`);
});
