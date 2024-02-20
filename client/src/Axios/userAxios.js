import axiox from 'axios'
import { userApi } from '../../Constants/API'

const userInstance = axiox.create({
    baseURL:userApi,
    withCredentials:true
})

export default  userInstance