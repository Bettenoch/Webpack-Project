/* eslint-disable linebreak-style */
import { newTasks } from './DisplayTask.js';

export const store = () => {
  localStorage.setItem('tasks', JSON.stringify(newTasks.tasks));
};

export const fetchItems = () => {
  const fetchedTodos = JSON.parse(localStorage.getItem('tasks'));
  if (fetchedTodos === null) {
    return;
  }
  fetchedTodos.forEach((todo) => {
    newTasks.addItems(todo);
  });
};