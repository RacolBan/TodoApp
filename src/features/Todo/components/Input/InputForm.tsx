import React, { useState } from 'react';
import { DatePicker } from '../../../../components/DatePicker/DatePicker';
import { TextField } from '../../../../components/TextField/TextField';
import { useTodoContext } from '../../contexts/TodoContext';
import { addTask } from '../../Store/action';
import { postTodosApi } from '../../../API/API';

export const InputForm = (): JSX.Element => {
  const [deadline, setDeadline] = useState<string>('');
  const [task, setTask] = useState<string>('');
  const { dispatch } = useTodoContext();
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (task === '') {
      alert('Enter your todo task');
    } else if (task.length > 40) {
      alert('the task entered is just at most 28 characters');
    } else if (deadline === '') {
      alert('Pick a deadline');
    } else {
      const data = await postTodosApi(task, deadline);
      alert('Add a task succesfully!');
      dispatch(addTask(data));
      setTask('');
      setDeadline('');
    }
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)} className="form">
      <div className="flexColumn">
        <TextField task={task} onChangeTask={taskInputValue => setTask(taskInputValue)} />
        <DatePicker deadline={deadline} onChangeDeadline={deadlineInputValue => setDeadline(deadlineInputValue)} />
        <button className='btn-sub'>Add</button>
      </div>
    </form>
  );
};
