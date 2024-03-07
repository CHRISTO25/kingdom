import express from 'express';



import {protect} from '../../../middlewares/authMiddleware.js'
import {  availableJobs, companySignup, userLogin, userLogout, userSignup } from '../../controllers/user/userController.js';

const router = express.Router();

// public routes--------------------------------------------
router.post('/signin',userLogin)
router.post('/signup',userSignup)
router.post('/companySignup',companySignup)
router.post('/logout',userLogout)
router.get('/jobsName',availableJobs)


export default router;