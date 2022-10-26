/* eslint-disable indent */
import { ITask, ITaskState, TaskActions } from '../Interface/interface';
import { ACTION } from './constants';

export const initState: ITaskState = {
  tasks: []
};

export const reducer = (state = initState, action: TaskActions): ITaskState => {
  switch (action.type) {
    case ACTION.GET_TASK: {
      return {
        ...state,
        tasks: action.payload as ITask[]
      };
    }

    case ACTION.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload as ITask]
      };
    }

    case ACTION.EDIT_TASK: {
      const payload = action.payload as ITask;
      const newData = state.tasks.map(todo => {
        return todo.id === payload.id
          ? { ...todo, content: payload.content, deadline: payload.deadline }
          : todo;
      });
      return {
        ...state,
        tasks: newData
      };
    }
    case ACTION.TOGGLE_TASK: {
      const payload = action.payload as ITask;
      const newData = state.tasks.map((todo) => {
        return todo.id === payload.id
          ? { ...todo, isCompleted: !payload.isCompleted }
          : todo;
      });
      return {
        ...state,
        tasks: newData
      };
    }
    case ACTION.DEL_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.id !== action.payload)
      };
    }

    default:
      throw new Error('invalid');
  }
};
