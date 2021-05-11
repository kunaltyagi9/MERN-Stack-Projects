import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;