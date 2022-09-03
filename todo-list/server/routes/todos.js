import express from 'express';

import { getAllTodos, addTodo, getTodoById, markTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';


const router = express.Router();


router.get('/', getAllTodos);
router.post('/', addTodo);
router.get('/:id', getTodoById);
router.post('/:id', markTodoDone);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
