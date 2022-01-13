import { Request, Response } from 'express';
import Task from '../models/task';

const getTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
};

const getTaskById = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(400).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch(e) {
        return res.status(500).json(e);
    }
};

const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const task = await new Task({title, description});
    await task.save();
    res.status(200).json(task);
};

const updateTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        }, { new: true });
        return res.status(200).json(task);
    } catch(e) {
        return res.status(500).json(e);
    }
};

const deleteTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(400).json({ message: "Task not found" });
        return res.status(200).json(task);
    }catch(e) {
        return res.status(500).json(e);
    }
};

export default {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}