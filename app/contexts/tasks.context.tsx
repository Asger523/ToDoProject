import {createContext} from 'react';

interface TaskContextInterface {
  tasks: string[]; // an array where each task is a string.
  addTask: (newTask: string) => void; // function: adds a new task to the list.
  removeTask: (taskToRemove: string) => void; // function: deletes a task from the list.
  clearTasks: () => void; // function: wipes out all tasks.
}

const TaskContext = createContext<TaskContextInterface>({
  tasks: [],
  addTask: (newTask: string) => {},
  removeTask: (taskToRemove: string) => {},
  clearTasks: () => {},
});

export const TaskProvider = ({children}) => {
  // Hint: some code from App.tsx will be copy pasted here

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask, clearTasks}}>
      {children}
    </TaskContext.Provider>
  );
};
