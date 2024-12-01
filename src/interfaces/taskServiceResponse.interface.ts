import { Task } from '@interfaces/task.interface';

interface IResponseTaskService {
  readonly success: boolean;
}

export interface IResponseCreateTask extends IResponseTaskService {
  readonly response: string;
}

export interface IResponseGetTasks extends IResponseTaskService {
  readonly response: Task[];
}

export interface IResponseGetTask extends IResponseTaskService {
  readonly response: Task;
}
