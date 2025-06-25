import { todo } from "../models/todoModel.js";

export const createTodo = async (req,res) => {
    try {
        const {title, description} = req.body;
        const newTodo = await todo.create({
            title,
            description
        })
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}