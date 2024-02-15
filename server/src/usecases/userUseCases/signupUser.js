import {  findJobByName, saveJobs, saveUser } from "../../repositories/userRepositoty.js";
import { findUserByEmail } from '../../repositories/userRepositoty.js';
import { saltPassword } from "../../services/bcrypt.js"
import { generateUserToken } from '../../middlewares/createToken.js';


export const createUser = async (res, name, idName, email, job, phone, password) => {
  if (!name || !idName || !email || !job || !phone || !password) {
    return { data: " All Fields Are Rquired" }
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return { data: "Already have an account" }
  } else {
    const jobs = await job.toLocaleLowerCase()
    const JobExists = await findJobByName(jobs)

    if (!JobExists) {
      const jobSaved = saveJobs(jobs)
      if (jobSaved) {
        console.log("job Sucessfully created");
      } else {
        console.log("job creation cancelled ");
      }
    } else {
      console.log("job already in the  database")
    }
    const securePassword = await saltPassword(password);
    const newUser = await saveUser(name, idName, email, jobs, phone, securePassword)
    if (newUser) {
      const token = await generateUserToken(res, newUser)
      return { data: "SignUp  sucessfull", token }
    }
    else {
      return { data: "sorry SignUp cancelled" }
    }
  }
}