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
import { error } from "console";


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