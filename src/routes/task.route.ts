/**
 * Here the file all routes will be thre 
 * like createTask or updateTask like that
 * 
 * @author meganathan
 */

import { Router } from "express";
import {
    createTask,
    getTasks,
} from '../controllers/task.controller';


const router = Router();

router.get('/tasks', getTasks);
router.post('/create', createTask);


export default router;