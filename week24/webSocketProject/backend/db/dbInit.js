import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient("mongodb://localhost:27017");
export const db = client.db("ws");

try {
	await client.connect();
	console.log("DB Connected!");
} catch (error) {
	console.error(error);
	process.exit(1);
}
