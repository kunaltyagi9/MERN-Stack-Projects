import express, { Router } from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controller/post-controller.js';

const route = express.Router();


route.post('/create', createPost);
route.put('/update/:id', updatePost);
route.delete('/delete/:id', deletePost);

route.get('/post/:id', getPost);
route.get('/posts', getAllPosts);

export default route;