import { saveUser } from "../../repositories/userRepositoty.js";
import { findUserByEmail } from '../../repositories/userRepositoty.js';
import { saltPassword } from "../../services/bcrypt.js"
import { generateUserToken } from '../../middlewares/createToken.js';


export const createUser = async (res, name, idName, email, job, phone, password) => {
  if (!name || !idName || !email || !job || !phone || !password) {
    throw new Error(" All Fields Are Rquired")
  }
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return { error: "already have an account" }
  } else {

    const securePassword = await saltPassword(password);
    const newUser = await saveUser(name, idName, email, job, phone, securePassword)
    if (newUser) {
      const token = await generateUserToken(res, newUser)

      return { userData: newUser, token }
    }
  }

}
