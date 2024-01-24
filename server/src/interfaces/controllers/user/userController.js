import User from '../../../entities/user/userModel.js'
import asyncHandler from 'express-async-handler'
import { loginUser } from '../../../usecases/userUseCases/loginUser.js';



//Login user  - public  - api/user/auth

 export const userLogin = asyncHandler(async(req,res)=>{
    try {
        const {email , password} = body;
        const response  =  loginUser(email,password)
            
      const { userData, token } = response;
      res.json({ userData, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})