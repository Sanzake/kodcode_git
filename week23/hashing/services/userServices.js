import bcrypt from "bcrypt"


export async function hashPassword(password) {
    return bcrypt.hash(password, 10)
}

export async function checkPassword(password, hash) {
    return bcrypt.compare(password, hash)
}

export async function registerUser(username, password) {
    return {"username": username, "pass": await hashPassword(password)}
}


export async function loginUser(password, savedHash) {
    return await checkPassword(password, savedHash)
}
