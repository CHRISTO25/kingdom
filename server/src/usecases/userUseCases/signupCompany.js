import { saveCompany } from "../../repositories/userRepositoty.js";
import { findCompanyByEmail } from '../../repositories/userRepositoty.js';
import { saltPassword } from "../../services/bcrypt.js"
import { generateUserToken } from '../../middlewares/createToken.js';


export const createCompany = async (res, name, idName, email, phone, password) => {
  if (!name || !idName || !email || !phone || !password) {
    return {data:"All fields are required"}
  }
  const existingUser = await findCompanyByEmail(email);
  if (existingUser) {
    return { data: "Already have an account "}
  } else {
    const securePassword = await saltPassword(password);
    const newUser = await saveCompany(name, idName, email, phone, securePassword)
    if (newUser) {
      const token = await generateUserToken(res, newUser)
      return { data:"SignUp sucessfull", token }
    }
    else{
      return {data:"Signup cancelled"}
    }
  }

}
