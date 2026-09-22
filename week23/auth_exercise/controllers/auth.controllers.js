import { createUserDAL, findUserByEmailDAL } from "../DAL/auth.DAL.js";
import { hashPassword } from "../utils/password.js";

export const registerController = async (req, res) => {
    const {email, name, password} = req.body

    const userExists = await findUserByEmailDAL(email);
	if (userExists) throw new AppError("User alredy exists", 409);

	const passwordHash = await hashPassword(password);

	const newUser = await createUserDAL({ email, name, passwordHash });
	delete newUser.passwordHash;
	res.status(201).json(newUser);
} 