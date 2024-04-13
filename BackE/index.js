import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth-routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Trung đẹp trai!!!");
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`MESS ĐANG CHẠY Ở CỔNG ${PORT} NÀ!!!`);
});
