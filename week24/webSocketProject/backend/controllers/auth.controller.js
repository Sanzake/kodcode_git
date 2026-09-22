import { loginService, registerService } from "../services/authService.js";

export const handleRegister = async (req, res) => {
	const userData = req.body;
	const result = await registerService(userData);
	res.json(result);
};

export const handleLogin = async (req, res) => {
	const userData = req.body;
	const result = await loginService(userData);
	res.json(result);
};
