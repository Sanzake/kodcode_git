import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:5173"],
	},
});

io.on("connect", (client) => {
	console.log("Client connect!", client.id);
	client.on("msg", (msg) => {
		console.log(msg);
		client.emit("getMsg", msg);
	});

	client.on("disconnect", () => {
		console.log("Client disconnected", client.id);
	});
});

server.listen(8080, () => {
	console.log("Server run on 8080!");
});
