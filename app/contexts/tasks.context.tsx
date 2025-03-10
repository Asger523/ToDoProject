import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TaskContext Interface
interface TaskContextInterface {
  tasks: string[];
  addTask: (newTask: string) => void;
  removeTask: (taskToRemove: string) => void;
  clearTasks: () => void;
}

// Create TaskContext
const TaskContext = createContext<TaskContextInterface>({
  tasks: [],
  addTask: (newTask: string) => {},
  removeTask: (taskToRemove: string) => {},
  clearTasks: () => {},
});

// TaskProvider Component
export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState<string[]>([]);

  // Load tasks from AsyncStorage on app load
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };
    saveTasks();
  }, [tasks]);

  // Add Task
  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  // Remove Task
  const removeTask = (taskToRemove: string) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  // Clear All Tasks
  const clearTasks = async () => {
    setTasks([]);
    await AsyncStorage.removeItem('tasks');
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, clearTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

// Use TaskContext hook
export const useTasks = () => useContext(TaskContext);
