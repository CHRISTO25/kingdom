import asyncHandler from 'express-async-handler'
import User from '../entities/user/userModel.js'


export const findUserByEmail = asyncHandler(async(email)=>{
    try {
        const userData = await User.findOne({email});
        return userData
    } catch (error) {
        console.log(error);
        throw error
    }
})