import { z } from "zod";

export const registerSchema = z.object({
	body: z.object({
		name: z.string().min(2, "Name must be >= 2 chars"),
		email: z.string().email("Incorrect email"),
		password: z.string().min(6, "Password must be >= 6 chars"),
	}),
});
