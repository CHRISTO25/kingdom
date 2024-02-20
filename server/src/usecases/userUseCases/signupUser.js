import { findJobByName, saveJobs, saveUser } from "../../repositories/userRepositoty.js";
import { findUserByEmail } from '../../repositories/userRepositoty.js';
import { saltPassword } from "../../services/bcrypt.js"
import { generateUserToken } from '../../middlewares/createToken.js';


export const createUser = async (res, name, idName, email, jobselect, job, phone, password) => {
  if (!jobselect && !job) {
    return { data: "Please type or select job" }
  }
  if (!name || !idName || !email || !phone || !password) {
    return { data: " All Fields Are Rquired" }
  }
  let jobSet;
  if (job) {
    jobSet = job;
  } else {
    jobSet = jobselect;
  }
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return { data: "Already have an account" }
  } else {
    const jobs = await jobSet.toLocaleLowerCase()
    const JobExists = await findJobByName(jobs)

    if (!JobExists) {
      const jobSaved = await saveJobs(jobs)
      if (jobSaved) {
        console.log("job Sucessfully created");
      } else {
        console.log("job creation cancelled ");
      }
    } else {
      console.log("job already in the  database")
    }
    let securePassword = await saltPassword(password);
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