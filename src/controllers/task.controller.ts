import { Request, Response, NextFunction } from 'express';
import { Task } from '@interfaces/task.interface';
import TaskService from '@services/task.service';

export default class TaskController {
  static async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await TaskService.createTask(req.body);
      res.status(201).json({ success: true, response: 'Task created' });
    } catch (e: unknown) {
      next(e);
    }
  }
  static async getTasks(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tasks: Task[] = await TaskService.getTasks();
      res.status(200).json({ success: true, response: tasks });
    } catch (e: unknown) {
      next(e);
    }
  }
  static async getTaskById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId } = req.params;
      const task: Task = await TaskService.getTaskById(taskId);
      res.status(200).json({ success: true, response: task });
    } catch (e: unknown) {
      next(e);
    }
  }
  static async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId } = req.params;
      await TaskService.updateTask(taskId, req.body);
      res.status(200).json({ success: true, response: 'Task Updated' });
    } catch (e: unknown) {
      next(e);
    }
  }
  static async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId } = req.params;
      await TaskService.deleteTask(taskId);
      res.status(200).json({ success: true, response: 'Task Deleted' });
    } catch (e: unknown) {
      next(e);
    }
  }
}
