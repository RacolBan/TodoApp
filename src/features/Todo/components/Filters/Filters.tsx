import React, { useState } from 'react';
import { ITask } from '../../Interface/interface';
interface Props {
  tasks: ITask[]
  arrTaskStatus: ITask[]
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
enum EFilterStatus {
  All = 'All',
  Completed = 'Completed',
  Active = 'Active'
}

export default function Filters ({ tasks, arrTaskStatus, setFilter }: Props): JSX.Element {
  const tasksLength = tasks.length;
  const arrTaskStatusLength = arrTaskStatus.length;
  const filterArrStatus = (Object.keys(EFilterStatus));
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [idStatus, setIdStatus] = useState<number>(0);
  const handleFilterStatus = (status: string): void => {
    setFilter(status);
    setActiveFilter(status);
  };
  return (
    <div className='filter'>
      <div className='filter-radio flexRow'>
        {filterArrStatus.map((status, index) => {
          return (
            <label
              role='radio'
              className='filter-radio-label '
              key={index}
            >
              <input
                type='radio'
                value={status}
                className='filter-radio-input'
                checked={activeFilter === status}
                onChange={() => handleFilterStatus(status)}
              />
              <span className={ idStatus === index ? 'filter-radio-status red' : 'filter-radio-status' } onClick ={ () => setIdStatus(index) }>
                {status}
              </span>
            </label>
          );
        })}
      </div>
      <div className='filter-taskstatus'>
        <span className='filter-taskstatus-span'>
          {arrTaskStatusLength !== 0
            ? `Number of item: ${arrTaskStatusLength}/${tasksLength}`
            : "You don't have any task"}
        </span>
      </div>
    </div>
  );
}
