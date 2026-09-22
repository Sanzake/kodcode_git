import { createUserDAL, findUserByEmailDAL } from "../db/dbManager.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import { generateToken } from "../utils/token.js";

export const registerService = async (userData) => {
	const existUser = await findUserByEmailDAL(userData.email);
	if (existUser) {
		throw new Error("Error! user already exist!");
	}
	userData.passwordHash = await hashPassword(userData.password);
	delete userData.password;
	await createUserDAL(userData);
	return userData._id;
};

export const loginService = async (userData) => {
	const existUser = await findUserByEmailDAL(userData.email);
	if (!existUser) {
		throw new Error("Error! User doesnt exist exist!");
	}
	const validPassword = await comparePassword(
		userData.password,
		existUser.passwordHash,
	);
	if (!validPassword) {
		throw new Error("Invalid password!");
	}
	const token = generateToken({ username: existUser.username});
	return token;
};
