import React from 'react';

interface TaskProps {
  task: string
  onChangeTask: (value: string) => void
}

export const TextField = ({ task, onChangeTask }: TaskProps): JSX.Element => {
  return (
    <>
      <input className='input text'
        type='text'
        placeholder="Task for today"
        value={task}
        onChange={(e) => onChangeTask(e.target.value)}
      />
    </>
  );
};
