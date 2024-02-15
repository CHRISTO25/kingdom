import express from 'express';

import {protect} from '../../../middlewares/authMiddleware.js'
import { companySignup, userLogin, userLogout, userSignup } from '../../controllers/user/userController.js';

const router = express.Router();

router.post('/signin',userLogin)
router.post('/signup',userSignup)
router.post('/companySignup',companySignup)
router.post('/logout',userLogout)

export default router;