import { Task } from '../type/task'
import api from './api'


export const fetchTasks = async (): Promise<Task[]> => {
  const res = await api.get('/todos?_limit=10')
  return res.data
}
