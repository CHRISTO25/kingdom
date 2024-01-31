import asyncHandler from 'express-async-handler'
import { findUserByEmail } from '../../repositories/userRepositoty.js';
import { matchPassword } from '../../services/bcrypt.js';
import { generateUserToken } from '../../middlewares/createToken.js';


export const loginUser = asyncHandler(async(res,email,password)=>{
    
    const existingUser = await findUserByEmail(email);
console.log(existingUser);
    if (existingUser) {
        if (existingUser.status == false) {
            return {error :"your accout has been blocked"}
        } else {
        
            const isMatch = await matchPassword(password,existingUser.password)
             if (isMatch) {
                const token = generateUserToken(res,existingUser)
                
                return {userData:existingUser , token}
             } else {
                throw new Error('Password does not match')
                return { error: "Password does not match." };
             }
        }
    } else {
        throw new Error('User not found')
        // return { error: "User not found." };
    }
})
