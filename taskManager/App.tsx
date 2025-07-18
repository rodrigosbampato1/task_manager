import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TaskProvider } from './src/context/context'
import AddTaskScreen from './src/screens/addTaskScreen/addTaskScreen'
import TaskListScreen from './src/screens/taskListScreen/taskListScreen'
import { RootStackParamList } from './src/type/navigation'

const Stack = createNativeStackNavigator<RootStackParamList>()
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
              <Stack.Screen name="List" component={TaskListScreen} options={{ title: 'Minhas Tarefas Diárias' }} />
              <Stack.Screen name="Add" component={AddTaskScreen} options={{ title: 'Nova Tarefa' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </TaskProvider>
    </QueryClientProvider>
  )
}
