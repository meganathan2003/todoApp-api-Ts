/**
 * Here the file have bussiness logic
 * and all method 
 */

import Task from "../models/task.model";

export class TaskService {

    async getAllTasks() {
        return await Task.findAll();
    }

    // Create a user
    async createTask(taskData: { title: string, description: string, status?: string }) {
        return await Task.create(taskData);
    }
}

// Export the new obje in TaskService
export default new TaskService(); 