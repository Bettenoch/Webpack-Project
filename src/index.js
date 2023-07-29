import './styles/index.scss';

import fetchTodos from './modules/FetchFromLs.js';
import todos from './modules/AddTask.js';
import addItems from './modules/DisplayTask.js';
import removeTodo from './modules/DeleteTask.js';
import { currVal, editTask } from './modules/editTask.js';
import isChecked from './modules/CheckTodo.js';
import clearChecked from './modules/DeleteCompleted.js';

const plus = document.getElementById('addBtn');
const removeAll = document.getElementById('clear-complete');
const todo = document.getElementById('task-input');
const refresh = document.getElementById('reload');
const tasks = document.getElementById('todo-list-items');

const item = fetchTodos();

item.forEach((event) => {
  todos(event);
});

refresh.addEventListener('click', () => {
  item.forEach((task) => {
    task.completed = false;
  });
  localStorage.setItem('tasks', JSON.stringify(item));
  window.location.reload();
});

plus.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = todo.value;
  addItems(inputValue);
  todo.value = '';
});

window.getCurrentTask = (e) => {
  currVal(e);
};

window.editTodo = (e) => {
  editTask(e);
};

window.checkTask = (e) => {
  isChecked(e);
};

const removeTaskInArr = (target) => {
  if (target.classList.contains('remove')) {
    removeTodo(target.parentNode.firstElementChild
      .lastElementChild.value);
    target.parentNode.parentNode.remove();
  }
};

const manageTask = (item) => {
  removeTaskInArr(item.target);
};

tasks.addEventListener('click', manageTask);

removeAll.addEventListener('click', () => {
  clearChecked();
  window.location.reload();
});