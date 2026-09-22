import { Router } from "express";
import { registerController } from "../controllers/auth.controllers.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validate.js";
import { registerSchema } from "../validation/auth.validation.js";

const router = Router();

router.post(
	"/register",
	validate(registerSchema),
	asyncWrapper(registerController),
);

export default router;
