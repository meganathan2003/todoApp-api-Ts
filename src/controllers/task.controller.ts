/**
 * Here the file all req and response
 * is there like find all method
 * and create a new task method
 * 
 * @author meganathan
 */

import { Request, Response } from "express";
import Task from "../models/task.model";
import TaskService from "../services/task.service";
import { STRING } from "sequelize";



export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    }
    catch (err) {
        console.error(err);
    }
}

// create task 
export const createTask = async (req: Request, res: Response) => {
    const task = Task.create(req.body);
    res.json(task);

}

// Get task by id
export const getTaskById = async (req: Request, res: Response) => {

    try {

        // Get the id from the url params
        const id = req.params.id;
        const task = TaskService.getTaskById(id);
        return res.json(task);

    }
    catch (e) {
        console.error(e);

    }
}

// Also create for delete task
export const deleteTask = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;
        const deleteTask = TaskService.deleteTaskById(id);
        return res.json(deleteTask);
    }
    catch (e) {
        console.error(e);

    }
}