import { createContext, useContext } from 'react';

export const TodoContext = createContext();

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  return context;
};
