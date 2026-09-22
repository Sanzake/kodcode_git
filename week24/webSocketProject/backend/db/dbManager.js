import { db } from "./dbInit.js";

const users = db.collection("users");

export const createUserDAL = async (userData) => {
	await users.insertOne(userData);
	return { ...userData };
};

export const findUserByUsernameDAL = async (username) => {
    const normalizedUsername = username.toLowerCase();
    const currentUser = await users.findOne({ username: normalizedUsername });
    return currentUser;
};