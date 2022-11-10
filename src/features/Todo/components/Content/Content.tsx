import React, { useEffect, useState } from 'react';
import Filters from '../Filters/Filters';
import { deleteTodosApi, getTodosAPI, toggleCompleteTodoAPI } from '../../../API/API';
import { useTodoContext } from '../../contexts/TodoContext';
import { delTask, getTask, toggleItem } from '../../Store/action';
import { ITask } from '../../Interface/interface';
import { EditModal } from '../EditModal/EditModal';
import TodoItem from '../todoItem/TodoItem';
enum EFilter {
  Completed = 'Completed',
  Active = 'Active'
}
export default function Content (): JSX.Element {
  const { state: { tasks }, dispatch } = useTodoContext();
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [newArrTaskInStatus, setNewArrTaskInStatus] = useState<ITask[]>([]);
  const [idTask, setIdTask] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect((): void => {
    const getTodos = async (): Promise<void> => {
      const data = await getTodosAPI();
      setLoading(false);
      dispatch(getTask(data));
    };
    void getTodos();
  }, []);
  useEffect((): void => {
    switch (filter) {
      case EFilter.Completed:
        setNewArrTaskInStatus(tasks.filter(task => task.isCompleted) ?? []);
        break;
      case EFilter.Active:
        setNewArrTaskInStatus(tasks.filter(task => !task.isCompleted) ?? []);
        break;
      default:
        setNewArrTaskInStatus(tasks ?? []);
    }
  }, [filter, tasks]);
  const handleDeleteItem = async (id: string): Promise<void> => {
    const a = await deleteTodosApi(id);
    if (a !== undefined) {
      alert('Deleted a task!');
      dispatch(delTask(id));
    }
  };
  const handleToggleItem = async (task: ITask): Promise<void> => {
    await toggleCompleteTodoAPI(task);
    dispatch(toggleItem(task));
    switch (task.isCompleted) {
      case false:
        alert(`${task.content} is completed`);
        break;
      case true:
        alert(`${task.content} is active`);
        break;
    }
  };
  return (
    <div className='content'>
      <h1 className='content-h1'>TODO LIST</h1>
      <div className="content-h1-filter">
        <Filters tasks={tasks} arrTaskStatus={newArrTaskInStatus} setFilter={setFilter} />
        <ul>
        { !loading && newArrTaskInStatus.length === 0
          ? <span className='content-span'> You don&rsquo;t have any task </span>
          : ''
        }
        { loading && newArrTaskInStatus.length === 0
          ? <span className='content-loading'>...Loading</span>
          : newArrTaskInStatus.map((task) => {
            const newTime = new Date(task.deadline).toLocaleString().split(', ', 2);
            return (
            <TodoItem
            key = { task.id }
            curItem= { task }
            curId = { task.id }
            content = {task.content}
            isCompleted = { task.isCompleted }
            deadline = { task.deadline }
            deadlineTime = { newTime[1] }
            deadlineHour = { newTime[0] }
            handleDeleteItem = { handleDeleteItem }
            handleToggleItem = { handleToggleItem }
            setToggleEditModal = { setToggleEditModal }
            setIdTask = { setIdTask }
            loading = {loading}
            newArr = {newArrTaskInStatus}
            />
            );
          })
        }
        </ul>
          { toggleEditModal
            ? tasks.map(task => {
              return (
                task.id === idTask &&
                  <EditModal key={task.id}
                  setToggleEditModal = { (value) => setToggleEditModal(value) }
                  content = {task.content}
                  deadline = { task.deadline }
                  id = { task.id }
                  />
              );
            })
            : ''
          }
      </div>
    </div>
  );
}
