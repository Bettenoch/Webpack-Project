import fetchTodos from './FetchFromLs.js';

function isChecked(e) {
  const item = fetchTodos();
  item.forEach((task) => {
    if (task.description === e.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });

  e.nextElementSibling.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(item));
}

export default isChecked;