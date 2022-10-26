import React, { useReducer } from 'react';
import { reducer, initState } from '../Store/reducer';
import { TodoContext } from './TodoContext';

interface Props {
  children: React.ReactNode | React.ReactElement
}

export const TodoProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      { children }
    </TodoContext.Provider>
  );
};
