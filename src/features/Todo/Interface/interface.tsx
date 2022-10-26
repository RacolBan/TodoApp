export interface ITask {
  id: string
  content: string
  deadline: string
  isCompleted: boolean
}

export interface ITaskState {
  tasks: ITask[]
}

export interface IGetTask {
  type: string
  payload: ITask[]
}

export interface IAddTaskItem {
  type: string
  payload: ITask
}

export interface IDeleteTaskItem {
  type: string
  payload: string
}

export interface IEditTaskItem {
  type: string
  payload: ITask
}
export interface IToggleTaskItem {
  type: string
  payload: ITask
}
export interface IContext {
  state: ITaskState
  dispatch: React.Dispatch<TaskActions>
}

export type TaskActions =
    | IGetTask
    | IAddTaskItem
    | IDeleteTaskItem
    | IEditTaskItem
    | IToggleTaskItem
