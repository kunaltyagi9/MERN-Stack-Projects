import express from 'express';

import { userLogin, getUser, logoutUser } from '../controller/user-controller.js';
import { verifyUser, refreshToken } from '../utils/jwtAuthentication.js';

const router = express.Router();

//jwt authentication
router.post('/login', userLogin);
router.get('/users/:id', verifyUser, getUser);
router.post('/refreshtoken', refreshToken);
router.post('/logout', verifyUser, logoutUser);

export default router;