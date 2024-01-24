import asyncHandler from 'express-async-handler'
import { findUserByEmail } from '../../repositories/userRepositoty.js';
import { matchPassword } from '../../services/bcrypt.js';
import { generateUserToken } from '../../middlewares/createToken.js';


export const loginUser = asyncHandler(async(email,password)=>{
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        if (existingUser.status == false) {
            return {error :"your accout has been blocked"}
        } else {
            const isMatch = await matchPassword(password,existingUser.password)
             if (isMatch) {
                const token = generateUserToken(existingUser)
                return {userData:existingUser , token}
             } else {
                return { error: "Password does not match." };
             }
        }
    } else {
        return { error: "User not found." };
    }
})
