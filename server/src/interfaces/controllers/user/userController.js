import User from '../../../entities/user/userModel.js'
import asyncHandler from 'express-async-handler'
import { loginUser } from '../../../usecases/userUseCases/loginUser.js';
import { createUser } from '../../../usecases/userUseCases/signupUser.js';
import { logout } from '../../../middlewares/logout.js';



//Login user  - public  - http://localhost:5000/api/users/

export const userLogin = asyncHandler(async (req, res) => {
  try {

    const { email, password } = req.body;
    const signinResponse = await loginUser(res,email, password)

    const { userData, token } = signinResponse;
    res.json({ userData, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


export const userSignup = asyncHandler(async (req, res) => {
  try {
    const { name, idName, email, job, phone, password } = await req.body;
    console.log(name, idName, email, job, phone, password);

    const signupResponse = await createUser(res, name, idName, email, job, phone, password)
    res.json({ signupResponse });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something error happened" });
  }
})



export const userLogout = asyncHandler(async(req,res)=>{
  try {
     logout(res)
    
  } catch (error) {
    console.log(error);
    throw new Error('logout cancelled')
  }

})