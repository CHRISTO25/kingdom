import express from 'express';

import {protect} from '../../../middlewares/authMiddleware.js'
import { userLogin } from '../../controllers/user/userController.js';

const router = express.Router();

router.post('/',userLogin)

export default router;