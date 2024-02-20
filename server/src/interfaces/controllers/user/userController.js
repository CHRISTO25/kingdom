import User from '../../../entities/user/userModel.js'
import asyncHandler from 'express-async-handler'
import { loginUser } from '../../../usecases/userUseCases/loginUser.js';
import { createUser } from '../../../usecases/userUseCases/signupUser.js';
import { createCompany } from '../../../usecases/userUseCases/signupCompany.js';
import { logout } from '../../../middlewares/logout.js';
import { allJobs } from '../../../repositories/userRepositoty.js';



//Login user  - public  - http://localhost:5000/api/users/
export const userLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password, position } = req.body;
    const signinResponse = await loginUser(res, email, password, position)
    const { data, token } = signinResponse;
    console.log(token, "");
    if (token) {
      res.json({ data, token })
    } else {
      res.json({ data });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


// user signup ====================public
export const userSignup = asyncHandler(async (req, res) => {
  try {
    const { name, idName, email,jobselect,job, phone, password } = await req.body;
    console.log(name, idName, email, job, phone, password);
    const signupResponse = await createUser(res, name, idName, email,jobselect, job, phone, password)
    const { data, token } = signupResponse
    if (token) {
      res.json({ data, token })
    } else {
      res.json({ data });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something error happened" });
  }
})


//companySignup======================public
export const companySignup = asyncHandler(async (req, res) => {
  try {
    const { name, idName, email, phone, password } = await req.body;
    console.log(name, idName, email, phone, password);
    const signupResponse = await createCompany(res, name, idName, email, phone, password)
    const { data, token } = signupResponse
    if (token) {
      res.json({ data, token })
    } else {
      res.json({ data });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something error happened" });
  }
})


// All userLogout=======================private
export const userLogout = asyncHandler(async (req, res) => {
  try {
    logout(res)
  } catch (error) {
    console.log(error);
    throw new Error('logout cancelled')
  }

})


// geting all jobs 
export const availableJobs =  asyncHandler(async(req,res)=>{
  try {
     const jobs = await allJobs()
     res.json({jobs})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something error happened" });
  }
})