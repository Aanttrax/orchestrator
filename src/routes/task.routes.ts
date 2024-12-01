import { Router } from 'express';
import TaskController from '@controllers/task.controller';
import { isAuthenticatedMiddleware } from '@middleware/authentication.middleware';

const router: Router = Router();

router.post('/task', isAuthenticatedMiddleware, TaskController.createTask);
router.get('/task', isAuthenticatedMiddleware, TaskController.getTasks);
router.get('/task/:taskId', isAuthenticatedMiddleware, TaskController.getTaskById);
router.put('/task/:taskId', isAuthenticatedMiddleware, TaskController.updateTask);
router.delete('/task/:taskId', isAuthenticatedMiddleware, TaskController.deleteTask);

export default router;
