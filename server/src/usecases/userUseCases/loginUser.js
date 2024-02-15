import asyncHandler from 'express-async-handler'
import { findUserByEmail, findCompanyByEmail } from '../../repositories/userRepositoty.js';
import { matchPassword } from '../../services/bcrypt.js';
import { generateUserToken } from '../../middlewares/createToken.js';


export const loginUser = asyncHandler(async (res, email, password, position) => {
    if (!email || !password || !position) {
        return { data: "Enter all fields " }
    }
    let existingUser
    console.log(position)
    if (position == "worker") {
        existingUser = await findUserByEmail(email);
        console.log(existingUser);
    } else {
        existingUser = await findCompanyByEmail(email);
        console.log(existingUser);
    }
    if (existingUser) {
        if (existingUser.status == false) {
            return { data: "your accout has been blocked" }
        } else {
            const isMatch = await matchPassword(password, existingUser.password)
            if (isMatch) {
                const token = generateUserToken(res, existingUser)
                return { data: "Login Sucess", token }
            } else {
                return { data: "Password does not match." };
            }
        }
    } else {
        return { data: "User not found." };
    }
})
