import './styles/index.scss';

import Algos from './modules/DisplayTask.js';

const mainForm = document.getElementById('main-form');
const editForm = document.getElementById('edit-form');
const userInput = document.getElementById('task-input');
const editInput = document.getElementById('edit-input');

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Algos.addTodoItems(userInput.value);
  userInput.value = '';
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Number(editInput.getAttribute('id'));
  Algos.updateTask(editInput.value, id);
  editInput.value = '';
  document.getElementById('main-form').style.display = 'block';
  editForm.style.display = 'none';
});

window.addEventListener('DOMContentLoaded', () => {
  Algos.displayTodos();
});