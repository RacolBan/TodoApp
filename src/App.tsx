import React, { FC } from 'react';
import { TodoProvider } from './features/Todo/contexts/TodoProvider';
import { Todo } from './features/Todo/Todo';
import './sass/main.scss';
const App: FC = () => {
  return (
    <div className='App'>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
};

export default App;
