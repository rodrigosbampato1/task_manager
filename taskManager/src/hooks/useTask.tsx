import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../services/service'

export const useTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })
}
