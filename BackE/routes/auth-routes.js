import express from "express";
import { login, signup } from "../controllers/auth-controller.js";
const router = express.Router();

router.use("/signup", signup);

router.use("/login", login);

router.get("/logout", (req, res) => {
  res.send("Logout router");
});

export default router;
