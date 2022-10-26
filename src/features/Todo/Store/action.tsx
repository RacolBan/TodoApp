import { ACTION } from './constants';
import { ITask, TaskActions } from '../Interface/interface';

export const getTask = (payload: ITask[]): TaskActions => {
  return {
    type: ACTION.GET_TASK,
    payload
  };
};
export const addTask = (payload: ITask): TaskActions => {
  return {
    type: ACTION.ADD_TASK,
    payload
  };
};
export const editTask = (payload: ITask): TaskActions => {
  return {
    type: ACTION.EDIT_TASK,
    payload
  };
};
export const delTask = (payload: string): TaskActions => {
  return {
    type: ACTION.DEL_TASK,
    payload
  };
};

export const toggleItem = (payload: ITask): TaskActions => {
  return {
    type: ACTION.TOGGLE_TASK,
    payload
  };
};
