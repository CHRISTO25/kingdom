import asyncHandler from 'express-async-handler'
import User from '../entities/user/userModel.js'
import Company from '../entities/user/companyModel.js';
import Jobs from '../entities/user/jobsModel.js';


// Finding user using email.
export const findUserByEmail = asyncHandler(async(email)=>{
    try {

        const userData = await User.findOne({email});
        return userData
    } catch (error) {
        console.log(error);
        throw error
    }
})

//Finding User with IdName
export const findUserByIdName = asyncHandler(async(IdName)=>{
    try {

        const userData = await User.findOne({idName:IdName});
        return userData
    } catch (error) {
        console.log(error);
        throw error
    }
})


//Finding User with Number
export const findUserByNumber = asyncHandler(async(phone)=>{
    try {

        const userData = await User.findOne({phone});
        return userData
    } catch (error) {
        console.log(error);
        throw error
    }
})

// Finding company using email.
export const findCompanyByEmail = asyncHandler(async(email)=>{
    try {
        const companyData = await Company.findOne({email});
        return companyData
    } catch (error) {
        console.log(error);
        throw error
    }
})


// Finding job using name
export const findJobByName = asyncHandler(async(jobs)=>{
    try {
        const jobData = await Jobs.findOne({name:jobs});
        return jobData
    } catch (error) {
        console.log(error);
        throw error
    }
})

// get all jobs in the database
export const allJobs = asyncHandler(async()=>{
    try {
        const job = await Jobs.find()
       
        return job
    } catch (error) {
        console.log(error);
        throw error
    }
})

// Saving user.
export const saveUser = asyncHandler(async(name,idName,email,job,phone,password)=>{
    try {
        console.log("============================ivdea varunundu mwneaaaaa=========================================");
        console.log(name,idName,email,job,phone,password);
        const users = await User.create({
            name,
            idName,
            email,
            job,
            phone,
            password
         });
    return await users.save();
    } catch (error) {
        console.log(error);
        throw error
    }

})

//saving company.
export const saveCompany =asyncHandler(async(name,idName,email,phone,password)=>{
    try {
        const company = await Company.create({
            name,
            idName,
            email,
            phone,
            password
         });
    return await company.save();

    } catch (error) {
        console.log(error);
        throw error
    }

})


//save new job
export const saveJobs = asyncHandler(async(name)=>{
    try {
        const Job = await Jobs.create({
            name
        })
        return await Job.save()
    } catch (error) {
        console.log(error);
        throw error
    }
})

