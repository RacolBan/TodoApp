import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
export const Todo = (): JSX.Element => {
  return (
    <div className='todo'>
      <div className="container flexRow todo-container ">
        <Header />
        <Content />
      </div>
    </div>
  );
};
