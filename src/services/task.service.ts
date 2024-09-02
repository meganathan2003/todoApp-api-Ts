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

    // Get task by id
    async getTaskById(id: string) {
        const numberId = Number(id);
        return await Task.findByPk(numberId);
    }

    // Write the delete task
    async deleteTaskById(id: string) {
        const numberId = Number(id);
        // Check if the conversion was successful and id is a valid number
        if (isNaN(numberId)) {
            throw new Error('Invalid ID format');
        }
        const result = await Task.destroy({
            where: {
                id: numberId
            }
        });
        // Check if any rows were deleted
        if (result === 0) {
            throw new Error('Task not found');
        }

        return { message: 'Task deleted successfully' };
    }
}

// Export the new obje in TaskService
export default new TaskService(); 