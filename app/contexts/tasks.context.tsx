import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Task Interface
interface Task {
  title: string;
  description: string;
  date: Date;
}
// TaskContext Interface
interface TaskContextInterface {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskToRemove: Task) => void;
  clearTasks: () => void;
}

// Create TaskContext
const TaskContext = createContext<TaskContextInterface>({
  tasks: [],
  addTask: (newTask: Task) => {},
  removeTask: (taskToRemove: Task) => {},
  clearTasks: () => {},
});

// TaskProvider Component
export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

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
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  // Remove Task
  const removeTask = (taskToRemove: Task) => {
    setTasks(tasks.filter(task => task.title !== taskToRemove.title));
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
