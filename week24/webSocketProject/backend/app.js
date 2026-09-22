import { createServer } from "node:http";
import express from "express";
import helmet from "helmet";
import { Server } from "socket.io";
import authRouter from "./routes/auth.js";

const PORT = 54321;
const ROOMS = ["1", "2", "3"];

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: ["http://localhost:5173"] } });

io.on("connection", (socket) => {
	socket.emit("availableRooms", ROOMS);

	socket.on("joinRoom", (roomName) => {
		socket.join(roomName);
		console.log(`${socket.id} connected to room - ${roomName}`);

		socket.to(roomName).emit("message", {
			user: "system",
			text: `New user - ${socket.id} entered to the room ${roomName}`,
		});

		socket.emit("room_joined", roomName);
	});

	socket.on("sendMessage", ({room, text}) => {
		io.to(room).emit("message", {
			user: socket.id,
			text: text,
		});
	});

	socket.on("disconnect", () => {
		console.log(`User disconnect: ${socket.id}`);
	});
});

app.use(helmet());
app.use(express.json());

app.use("/auth", authRouter);

server.listen(PORT, () => {
	console.log(`Server listens on port ${PORT}`);
});
