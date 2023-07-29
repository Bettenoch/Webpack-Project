import fetchTodos from './FetchFromLs.js';

let currentItem = null;

function currVal(e) {
  currentItem = e.value;
}

function editTask(e) {
  const item = fetchTodos();
  const txt = e.value;

  if (!(txt === '')) {
    item.forEach((task) => {
      if (task.description === currentItem) {
        task.description = txt;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(item));
  }
}

export { currVal, editTask };