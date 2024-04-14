import express from "express";
import protectRoute from "../middleware/defenRoutes.js";
import { getUserForSidebar } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSidebar);

export default router;
