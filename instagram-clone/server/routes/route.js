import express from 'express';

import { loginUser, singupUser } from '../controller/account-controller.js';
import { getAllUsers, getUser, followUser } from '../controller/user-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { savePost } from '../controller/post-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);

router.get('/users', getAllUsers);
router.post('/user', getUser);
router.post('/follow', followUser);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/post/save', savePost);
// router.put('/update/:id', authenticateToken, updatePost);
// router.delete('/delete/:id', authenticateToken, deletePost);
// router.get('/post/:id', authenticateToken, getPost);


// router.post('/comment/new', authenticateToken, newComment);
// router.get('/comments/:id', authenticateToken, getComments);
// router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;