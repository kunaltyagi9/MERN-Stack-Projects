import Todo from "../models/todo.js";


export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort([['createdAt', -1]]);

        response.status(200).json(todos);
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const addTodo = async (request, response) => {
    try {
        const todo = await Todo.create({
            name: request.body.name,
            createdAt: Date.now()
        });
        await todo.save();

        response.status(200).json(todo);
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getTodoById = async (request, response) => {
    try {
        const todo = await Todo.findById(request.params.id);

        response.status(200).json(todo);
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const markTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        );

        await todo.save();

        response.status(200).json(todo);
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const updateTodo = async (request, response) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { name: request.body.name }
        );
        await todo.save();

        response.status(200).json(todo);
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id);

        response.status(200).json(todo);
    } catch (error) {
        response.status(500).json(error.message);
    }
}