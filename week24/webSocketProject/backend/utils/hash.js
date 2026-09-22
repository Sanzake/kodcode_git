import bcrypt from "bcrypt"
import "dotenv/config"

const SALT_ROUNDS = 10

export const hashPassword = async (password) => {
    return bcrypt.hash(password, Number(SALT_ROUNDS))
}

export const comparePassword = async (password, passwordHash) => {
    return bcrypt.compare(password, passwordHash)
}