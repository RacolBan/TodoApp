import React, { useEffect } from 'react';
import { ITask } from '../../Interface/interface';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

interface Props {
  isCompleted: boolean
  curItem: ITask
  curId: string
  content: string
  deadlineTime: string
  deadlineHour: string
  deadline: string
  handleDeleteItem: (id: string) => void
  handleToggleItem: (task: ITask) => void
  setToggleEditModal: React.Dispatch<React.SetStateAction<boolean>>
  setIdTask: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
  newArr: ITask[]
}
export default function TodoItem (props: Props): JSX.Element {
  const { curItem, isCompleted, curId, content, deadlineTime, deadlineHour, deadline, loading, newArr, setIdTask, handleDeleteItem, handleToggleItem, setToggleEditModal } = props;
  const oneHourMilisecond = 60 * 60 * 1000;
  const dateNow: number = new Date().getTime();
  const timeToEvent: number = new Date(deadline).getTime();
  const time = timeToEvent - dateNow;
  const handleEdit = (): void => {
    setToggleEditModal(true);
    setIdTask(curId);
  };
  useEffect(() => {
    if (time < oneHourMilisecond && time > 0) {
      alert(`Task ${content} is nearly expire`);
    } else if (time < 0) {
      alert(`Task ${content} has been expired`);
    }
  }, []);
  return (
    <li className="content-area flexRow">
      { !loading && newArr.length === 0
        ? <span> You don&rsquo;t have any task </span>
        : ''
      }
      { loading && newArr.length === 0
        ? <span>...Loading</span>
        : <div>
            <div className="content-area-task">{ content }</div>
            <div className="content-area-time">{ deadlineTime } &nbsp; { deadlineHour }</div>
            <div className="content-area-action flexRow">
              <input
              type='checkbox'
              onChange={ () => handleToggleItem(curItem)}
              checked={isCompleted}
              />
              <span onClick={ () => handleDeleteItem(curId) }>
                <FaTrash />
              </span>
              <span onClick={ () => handleEdit() }>
                <FaPenSquare />
              </span>
            </div>
          </div>
      }
    </li>
  );
}
