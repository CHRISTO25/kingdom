import bcrypt from 'bcryptjs'

export const matchPassword = async(passwordOne,passwordTwo)=>{
    return await bcrypt.compare(passwordOne,passwordTwo)
}