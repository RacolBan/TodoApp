import { useContext, createContext } from 'react';
import { IContext } from '../Interface/interface';

export const TodoContext = createContext<IContext | null>(null);
export const useTodoContext = (): IContext => {
  const context = useContext(TodoContext);
  return context as IContext;
};
