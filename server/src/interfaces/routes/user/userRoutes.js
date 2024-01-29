import express from 'express';

import {protect} from '../../../middlewares/authMiddleware.js'
import { userLogin, userLogout, userSignup } from '../../controllers/user/userController.js';

const router = express.Router();

router.post('/',userLogin)
router.post('/signup',userSignup)
router.post('/logout',userLogout)

export default router;