import "dotenv/config";
import express from "express";
import userRoutes from "./routes/auth.routes.js";

import { errorHandler } from "./utils/errorHandler.js";

const app = express();
const port = Number(process.env.PORT) || 4876;

app.use(express.json());

app.use("/auth", userRoutes);

app.use((_, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Auth teaching server running on http://localhost:${port}`);
});
