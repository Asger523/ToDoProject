import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Task Interface
interface Task {
  title: string;
  description: string;
  date: Date;
  isDone?: boolean;
}
// TaskContext Interface
interface TaskContextInterface {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskToRemove: Task) => void;
  updateTask: (taskToUpdate: Task) => void;
  clearTasks: () => void;
}

// Create TaskContext
const TaskContext = createContext<TaskContextInterface>({
  tasks: [],
  addTask: (newTask: Task) => {},
  removeTask: (taskToRemove: Task) => {},
  updateTask: (taskToUpdate: Task) => {},
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
        const parsedTasks = JSON.parse(storedTasks).map(t => ({
          ...t,
          date: new Date(t.date), // Convert date string to Date object
        }));
        setTasks(parsedTasks);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem(
        'tasks',
        JSON.stringify(
          tasks.map(t => ({
            ...t,
            date: t.date instanceof Date ? t.date.toISOString() : t.date,
          })),
        ),
      );
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

  // Update Task
  const updateTask = (taskToUpdate: Task) => {
    setTasks(
      tasks.map(task =>
        task.title === taskToUpdate.title ? taskToUpdate : task,
      ),
    );
  };
  // Clear All Tasks
  const clearTasks = async () => {
    setTasks([]);
    await AsyncStorage.removeItem('tasks');
  };

  return (
    <TaskContext.Provider
      value={{tasks, addTask, removeTask, updateTask, clearTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

// Use TaskContext hook
export const useTasks = () => useContext(TaskContext);
