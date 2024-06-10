import express from 'express';

import { 
    authtorizeUser,
    createNewUser,
    logOutUser
 } from '../connections/controllers/userController.js'

const userPath = '/user/';

const router = express.Router();

router.post(userPath + 'auth', authtorizeUser);
router.post(userPath + 'create', createNewUser);
router.post(userPath + 'logout', logOutUser);

export const userRouter = router;