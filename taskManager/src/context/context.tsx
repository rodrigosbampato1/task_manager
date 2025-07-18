import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useContext, useEffect, useState } from 'react'
import { Task } from '../type/task'

interface TaskContextType {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTask: (id: number) => void
  clearCompleted: () => void
}

const TaskContext = createContext({} as TaskContextType)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    AsyncStorage.getItem('TASKS').then(stored => {
      if (stored) setTasks(JSON.parse(stored))
    })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('TASKS', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false }
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, clearCompleted }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
