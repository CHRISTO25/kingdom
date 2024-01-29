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

export const saveUser =asyncHandler(async(name,idName,email,job,phone,password)=>{
    try {
        const user = await User.create({
            name,
            idName,
            email,
            job,
            phone,
            password
         });
    return await user.save();
   

    } catch (error) {
        console.log(error);
        throw error
    }

})