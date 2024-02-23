import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { signIn, signUp } from "../controllers/user.controller.js";
const app = express();
const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

export default router;
