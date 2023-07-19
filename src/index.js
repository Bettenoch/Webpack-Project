import './styles/index.css';
import addList from './modules/AddTask.js';
import { newTasks } from './modules/DisplayTask';

import { addItem, userInput, taskField } from './modules/TaskList.js';
import { fetchItems, store } from './modules/LocalStorage.js';

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (userInput.value === '') {
        event.preventDefault();
      } else {
        const todo = addList(event);
        newTasks.addList(todo);
        newTasks.initialize();
        store();
        newTasks.displayTask();
      }
    }
  });

  addItem.addEventListener('click', (e) => {
    if (userInput.value === '') {
      e.preventDefault();
    } else {
        const todo = addList(e);
        newTasks.addList(todo);
        newTasks.initialize();
        store();
        newTasks.displayTask();
    }
  });

  taskField.addEventListener('keypress', (e) => {
    if (e.target.className === 'todo-task' && e.key === 'Enter') {
      if (e.target.textContent) {
        e.preventDefault();
        newTasks.updateTask(e.target.textContent, e.target.parentElement.id);
        store();
      } else {
        e.preventDefault();
      }
    }
  });

  window.addEventListener('load', () => {
    fetchItems();
    newTasks.displayTask();
  });