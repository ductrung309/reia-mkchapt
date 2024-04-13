import express from "express";
import dotenv from "dotenv";
import cookies from "cookie-parser";

import authRouter from "./routes/auth-routes.js";
import messageRouter from "./routes/message-routes.js";
import userRouter from "./routes/user-routes.js";
import connectMongoDB from "./db/mongodb-connect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookies());

app.use("/auth", authRouter);
app.use("/inbox", messageRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Trung đẹp trai!!!");
});

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`MESS ĐANG CHẠY Ở CỔNG ${PORT} NÀ!!!`);
});
