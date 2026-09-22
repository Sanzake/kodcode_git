import { Router } from "express";
import { handleLogin, handleRegister } from "../controllers/auth.controller.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router();

router.post("/register", asyncWrapper(handleRegister));

router.post("/login", asyncWrapper(handleLogin));

export default router;
