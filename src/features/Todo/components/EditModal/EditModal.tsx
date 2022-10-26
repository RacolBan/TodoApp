/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { editTodosApi } from '../../../API/API';
import { TextField } from '../../../../components/TextField/TextField';
import { DatePicker } from '../../../../components/DatePicker/DatePicker';
import { useTodoContext } from '../../contexts/TodoContext';
import { editTask } from '../../Store/action';

interface Props {
  setToggleEditModal: React.Dispatch<React.SetStateAction<boolean>>
  content: string
  deadline: string
  id: string
}

enum EWarning {
  InputWarn = 'Enter your todo task!',
  DeadLineWarn = 'Pick a deadline!'
}

export const EditModal = (props: Props): JSX.Element => {
  const { content, deadline, id, setToggleEditModal } = props;
  const { state: { tasks }, dispatch } = useTodoContext();
  const [newContent, setNewContent] = useState<string>(content);
  const [newDeadline, setNewDeadline] = useState<string>(deadline);

  const handleEditItem = async (): Promise<void> => {
    if (newContent === '') {
      alert(EWarning.InputWarn);
    } else if (newDeadline === '') {
      alert(EWarning.DeadLineWarn);
    } else {
      const item = tasks.find((task) => task.id === id);
      if (item !== undefined) {
        item.content = newContent;
        item.deadline = newDeadline;
        const data = await editTodosApi(item);
        alert('Task have been edited!');
        dispatch(editTask(data));
      }
      setToggleEditModal(false);
    }
  };
  return (
    <div className='container'>
      <div className='modal'>
        <div className='modal-delete-btn'>
          <button role='close modal' onClick={() => setToggleEditModal(false)}>
            {' '}
            &#10006;{' '}
          </button>
        </div>
        <div className='modal-input'>
          <TextField
            task={newContent}
            onChangeTask={(contentInputValue) =>
              setNewContent(contentInputValue)
            }
          />
          <DatePicker
            deadline={newDeadline}
            onChangeDeadline={(deadlineInputValue) =>
              setNewDeadline(deadlineInputValue)
            }
          />
        </div>
        <div className='modal-edit-btn'>
          <button role='update' onClick={handleEditItem}>
           Edit
          </button>
        </div>
      </div>
    </div>
  );
};
