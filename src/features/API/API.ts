import { ITask } from '../Todo/Interface/interface';
import axiosClient from './api_config';

const getTodosAPI = async (): Promise<ITask[]> => {
  try {
    const { data } = await axiosClient.get('/todos');
    return data;
  } catch (error) {
    throw new Error('Failed to get data!');
  }
};

const postTodosApi = async (content: string, deadline: string, isCompleted: boolean = false): Promise<ITask> => {
  try {
    const todo = { content, deadline, isCompleted };
    const { data } = await axiosClient.post('/todos', todo);
    return data;
  } catch (error) {
    throw new Error('Failed to post data');
  }
};

const editTodosApi = async (task: ITask): Promise<ITask> => {
  try {
    const todo = {
      content: task.content,
      id: task.id,
      deadline: task.deadline,
      isCompleted: task.isCompleted
    };
    const { data } = await axiosClient.put(`/todos/${task.id}`, todo);
    return data;
  } catch (e) {
    throw new Error('Failed to edit data');
  }
};

const toggleCompleteTodoAPI = async (todo: ITask): Promise<ITask> => {
  try {
    const { data } = await axiosClient.put(`/todos/${todo.id}`, {
      ...todo,
      isCompleted: !todo.isCompleted
    });
    return data;
  } catch (error) {
    throw new Error('Failed to put isCompleted data');
  }
};

const deleteTodosApi = async (id: string): Promise<ITask> => {
  try {
    const { data } = await axiosClient.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    throw new Error('delete failed');
  }
};

export {
  getTodosAPI,
  postTodosApi,
  deleteTodosApi,
  editTodosApi,
  toggleCompleteTodoAPI
};
