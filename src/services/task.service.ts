import axios, { AxiosResponse } from 'axios';
import { environment } from '@env/environment';
import { Task } from '@interfaces/task.interface';
import { IResponseCreateTask, IResponseGetTask, IResponseGetTasks } from '@interfaces/taskServiceResponse.interface';

const { SERVICE_TASK } = environment;

const createTask = async (task: Task, token: string): Promise<void> => {
  const headers = {
    'auth-token': token,
    'Content-Type': 'application/json',
  };
  try {
    const infoCreateTask: AxiosResponse<IResponseCreateTask> = await axios.post(`${SERVICE_TASK}task`, task, {
      headers,
    });
    const { data } = infoCreateTask;
    if (!data.success) throw data.response;
    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

const getTasks = async (token: string): Promise<Task[]> => {
  const headers = {
    'auth-token': token,
    'Content-Type': 'application/json',
  };
  try {
    const infoGetTasks: AxiosResponse<IResponseGetTasks> = await axios.get(`${SERVICE_TASK}task`, { headers });
    const { data } = infoGetTasks;
    if (!data.success) throw data.response;
    return data.response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

const getTaskById = async (taskId: string): Promise<Task> => {
  try {
    const infoGetTask: AxiosResponse<IResponseGetTask> = await axios.get(`${SERVICE_TASK}task/${taskId}`);
    const { data } = infoGetTask;
    if (!data.success) throw data.response;
    return data.response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

const updateTask = async (taskId: string, task: Task, token: string): Promise<void> => {
  const headers = {
    'auth-token': token,
    'Content-Type': 'application/json',
  };
  try {
    const infoUpdateTask: AxiosResponse<IResponseCreateTask> = await axios.put(`${SERVICE_TASK}task/${taskId}`, task, {
      headers,
    });
    const { data } = infoUpdateTask;
    if (!data.success) throw data.response;
    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

const deleteTask = async (taskId: string): Promise<void> => {
  try {
    const infoDeleteTask: AxiosResponse<IResponseCreateTask> = await axios.delete(`${SERVICE_TASK}task/${taskId}`);
    const { data } = infoDeleteTask;
    if (!data.success) throw data.response;
    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

export default {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
