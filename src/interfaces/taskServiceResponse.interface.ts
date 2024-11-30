import { Task } from '@interfaces/task.interface';

interface IResponseTaskService {
  success: boolean;
}

export interface IResponseCreateTask extends IResponseTaskService {
  response: string;
}

export interface IResponseGetTasks extends IResponseTaskService {
  response: Task[];
}

export interface IResponseGetTask extends IResponseTaskService {
  response: Task;
}
