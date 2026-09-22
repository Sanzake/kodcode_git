import jwt from "jsonwebtoken"
import "dotenv/config"

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
}

export const verifyToken = (token) => {
    try {
        const p = jwt.verify(token, process.env.JWT_SECRET)
        return p 
    } catch {
        throw new Error("Unauthorized", 401)
    }
}