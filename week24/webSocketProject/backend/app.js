import express from "express";
import helmet from "helmet";
import authRouter from "./routes/auth.js";

const port = 54321;

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(port, () => {
	console.log(`Server listens on port ${port}`);
});
