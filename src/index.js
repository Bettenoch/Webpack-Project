import './styles/index.scss';
import addItems from './modules/AddTask.js';
import { newTasks } from './modules/DisplayTask.js';

import { userInput, taskField } from './modules/TaskList.js';
import { fetchItems, store } from './modules/LocalStorage.js';

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (userInput.value === '') {
      event.preventDefault();
    } else {
      const todo = addItems(event);
      newTasks.addItems(todo);
      newTasks.initialize();
      store();
      newTasks.displayTask();
    }
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