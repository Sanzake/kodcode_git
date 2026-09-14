import { hashPassword, checkPassword, registerUser, loginUser } from "./services/userServices.js";

const hash = await hashPassword("123456");

console.log(
    await checkPassword("123456", hash)
);

console.log(
    await checkPassword("999999", hash)
);

const sh = await registerUser("momo", "12345")

console.log(sh)

console.log(await loginUser("123465", sh.pass))